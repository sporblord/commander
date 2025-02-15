import { Players } from "@rbxts/services";
import { BaseRegistry, Path } from "../shared";
import { BaseDispatcher } from "../shared/core/dispatcher";
import { DEFAULT_CLIENT_OPTIONS } from "./options";
import { ClientOptions, CommanderEvents, HistoryEntry } from "./types";

export class ClientDispatcher extends BaseDispatcher {
	private readonly history: HistoryEntry[] = [];
	private maxHistoryLength = DEFAULT_CLIENT_OPTIONS.historyLength;

	constructor(
		registry: BaseRegistry,
		private readonly events: CommanderEvents,
	) {
		super(registry);
	}

	/**
	 * Initialises the client dispatcher.
	 *
	 * @param options The client options provided when starting Commander
	 */
	init(options: ClientOptions) {
		this.maxHistoryLength = options.historyLength;
	}

	/**
	 * Executes a command.
	 *
	 * @param path The path of the command
	 * @param text The text input used to execute the command
	 * @returns A {@link HistoryEntry} containing the command's response
	 */
	async run(path: Path, text = "") {
		const [success, interaction] = this.executeCommand(
			path,
			Players.LocalPlayer,
			text,
		).await();
		if (!success) {
			warn(`An error occurred while executing '${text}': ${interaction}`);

			const errorEntry: HistoryEntry = {
				text: "An error occurred.",
				success: false,
				sentAt: os.time(),
			};
			this.addHistoryEntry(errorEntry);
			return errorEntry;
		}

		const reply = interaction.getData().reply;
		assert(reply !== undefined, "Reply not received");

		const entry: HistoryEntry = {
			text: reply.text,
			success: reply.success,
			sentAt: reply.sentAt,
		};

		this.addHistoryEntry(entry);
		return entry;
	}

	getHistory() {
		return this.history;
	}

	/**
	 * Adds a {@link HistoryEntry} to the history.
	 *
	 * If the number of history entries would exceed the limit if it were added,
	 * the oldest history entry will be removed.
	 *
	 * @param entry - The history entry to add
	 */
	addHistoryEntry(entry: HistoryEntry) {
		if (this.history.size() >= this.maxHistoryLength) {
			this.history.remove(0);
		}

		this.history.push(entry);
		this.events.historyUpdated.Fire(this.history);
	}
}
