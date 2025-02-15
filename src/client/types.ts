import { CommandOptions, GroupOptions, Path } from "../shared";
import { SharedOptions } from "../shared/options";

export interface ClientOptions extends SharedOptions {
	historyLength: number;
	interface?: (data: InterfaceContext) => void;
}

export interface HistoryEntry {
	text: string;
	success: boolean;
	sentAt: number;
}

export interface CommanderEvents {
	historyUpdated: BindableEvent<(history: HistoryEntry[]) => void>;
	commandAdded: BindableEvent<(key: string, command: CommandOptions) => void>;
	groupAdded: BindableEvent<(key: string, group: GroupOptions) => void>;
}

export type CommanderEventCallbacks = {
	[K in keyof CommanderEvents]: CommanderEvents[K] extends BindableEvent<
		infer R
	>
		? RBXScriptSignal<R>
		: never;
};

export type InterfaceContext = {
	options: ClientOptions;
	initialData: {
		commands: Map<string, CommandOptions>;
		groups: Map<string, GroupOptions>;
		history: HistoryEntry[];
	};
	events: CommanderEventCallbacks;
	execute: (path: Path, text: string) => Promise<HistoryEntry>;
	addHistoryEntry: (entry: HistoryEntry) => void;
};
