"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[923],{5324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(1527),r=t(7540);const o={description:"See examples for Commander"},s="Examples",i={id:"getting-started/examples",title:"Examples",description:"See examples for Commander",source:"@site/docs/getting-started/examples.mdx",sourceDirName:"getting-started",slug:"/getting-started/examples",permalink:"/commander/docs/getting-started/examples",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"See examples for Commander"},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/commander/docs/getting-started/installation"},next:{title:"Guides",permalink:"/commander/docs/guides/"}},m={},d=[{value:"Ban Command",id:"ban-command",level:2},{value:"Info Command",id:"info-command",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"These are some examples featuring Commander being used to define commands."}),"\n",(0,a.jsx)(n.h2,{id:"ban-command",children:"Ban Command"}),"\n",(0,a.jsxs)(n.p,{children:["This is a simple command featuring one argument. Keep in mind that the class containing\nthis command ",(0,a.jsx)(n.strong,{children:"must"})," be decorated with ",(0,a.jsx)(n.code,{children:"@Commander"})," in order to be registered."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:'import { BuiltInTypes, Command, CommandInteraction, Commander } from "@rbxts/commander";\n\n@Commander()\nclass BanCommand {\n    @Command({\n        name: "ban",\n        description: "Ban a player",\n        arguments: [\n            {\n                name: "player",\n                description: "Player to ban",\n                type: BuiltInTypes.Player\n            }\n        ]\n    })\n    ban(interaction: CommandInteraction, player: Player) {\n        if (player.UserId === 0) {\n            interaction.error("You cannot ban this player!");\n            return;\n        }\n\n        print(`${interaction.executor.Name} banned ${player.Name}!`);\n        interaction.reply(`Successfully banned ${player.Name}.`);\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"info-command",children:"Info Command"}),"\n",(0,a.jsxs)(n.p,{children:["This is an example of a command that uses ",(0,a.jsx)(n.strong,{children:"groups"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Groups are defined in the ",(0,a.jsx)(n.code,{children:"@Commander"})," decorator. At the moment, only the root group may\nhave children, but this may be changed in the future."]}),"\n",(0,a.jsxs)(n.p,{children:["A command can be assigned to a group using the ",(0,a.jsx)(n.code,{children:"@Group"})," decorator."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:'@Commander({\n\tgroups: [\n\t\t{\n\t\t\tname: "info",\n\t\t\tdescription: "View info about a user or the server",\n\t\t},\n\t\t{\n\t\t\tname: "user",\n\t\t\tdescription: "View info about a user",\n\t\t\troot: "info",\n\t\t},\n\t\t{\n\t\t\tname: "server",\n\t\t\tdescription: "View info about the server",\n\t\t\troot: "info",\n\t\t},\n\t],\n\n\t// Global groups are groups assigned to all commands\n\t// defined in this class.\n\tglobalGroups: ["info"],\n})\nclass InfoCommand {\n\t// This command will be executable through "info user view" once registered!\n\t@Command({\n\t\tname: "view",\n\t\targuments: [\n\t\t\t{\n\t\t\t\tname: "player",\n\t\t\t\tdescription: "Player to display information about",\n\t\t\t\ttype: BuiltInTypes.Player,\n\t\t\t},\n\t\t],\n\t})\n\t@Group("user") // You can also define groups like this: @Group("info", "user")\n\tuserView(interaction: CommandInteraction, player: Player) {\n\t\tinteraction.reply(`<Random data about ${player.Name}...>`);\n\t}\n\n\t// This command can have the same name as the above command, because it\n\t// is grouped under "server" instead.\n\t// This command will be executable through "info server view" once registered!\n\t@Command({\n\t\tname: "view",\n\t})\n\t@Group("server")\n\tserverView(interaction: CommandInteraction) {\n\t\tinteraction.error("Not implemented!");\n\t}\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},7540:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(959);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);