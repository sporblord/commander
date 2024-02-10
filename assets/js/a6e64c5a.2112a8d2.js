"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[804],{3948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(2488),s=n(7052);const i={description:"Learn how to create and register types"},a="Types",o={id:"guides/types",title:"Types",description:"Learn how to create and register types",source:"@site/docs/guides/types.mdx",sourceDirName:"guides",slug:"/guides/types",permalink:"/commander/docs/guides/types",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Learn how to create and register types"},sidebar:"docsSidebar",previous:{title:"Commands",permalink:"/commander/docs/guides/commands"},next:{title:"Registration",permalink:"/commander/docs/guides/registration"}},d={},l=[{value:"What are types?",id:"what-are-types",level:2},{value:"Creating types",id:"creating-types",level:2},{value:"&quot;Expensive&quot; types",id:"expensive-types",level:3},{value:"Using types",id:"using-types",level:2},{value:"Registering types",id:"registering-types",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"types",children:"Types"}),"\n",(0,r.jsx)(t.h2,{id:"what-are-types",children:"What are types?"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Types"})," are used to specify how text for an argument should be treated when executing a command."]}),"\n",(0,r.jsxs)(t.p,{children:["The primary purpose of a type is to ",(0,r.jsx)(t.strong,{children:"transform"})," text into another value.\nFor example, a ",(0,r.jsx)(t.code,{children:"Number"})," type would transform the provided text (",(0,r.jsx)(t.code,{children:"string"}),") into a ",(0,r.jsx)(t.code,{children:"number"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["They also allow for extra functionality, such as providing ",(0,r.jsx)(t.strong,{children:"suggestions"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-types",children:"Creating types"}),"\n",(0,r.jsxs)(t.p,{children:["In order to create a type, you should use ",(0,r.jsx)(t.code,{children:"TypeBuilder"}),". This is a helper class to make\ndefining types easier."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TypeBuilder"})," will create a ",(0,r.jsx)(t.code,{children:"TypeOptions"})," for you, using the values you provide\nto each method. This is what you will use to register the type."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"showLineNumbers",children:'import { TransformResult, TypeBuilder } from "@rbxts/commander";\nimport { t } from "@rbxts/t";\n\nconst playerType = TypeBuilder.create<Player>("player")\n\t.validate(t.instanceOf("Player"))\n\t.transform((text, executor) => {\n\t\tif (text === "@me") {\n\t\t\treturn TransformResult.ok(executor);\n\t\t}\n\n\t\tconst player = Players.FindFirstChild(text);\n\t\tif (player === undefined || !classIs(player, "Player")) {\n\t\t\treturn TransformResult.err("Player not found");\n\t\t}\n\t\treturn TransformResult.ok(player);\n\t})\n\t.suggestions(() => Players.GetPlayers().map((player) => player.Name))\n\t.build();\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The string you provide to ",(0,r.jsx)(t.code,{children:"TypeBuilder.create"})," will be the name of the type. It may be useful to store\nyour type names in an enum or constant to make them more accessible -\nsee ",(0,r.jsx)(t.a,{href:"https://github.com/paradoxuum/commander/blob/main/src/shared/builtin/types/index.ts",children:"CommanderType"}),"\nfor an example."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"validate"})," method requires a type guard. You can use ",(0,r.jsx)(t.code,{children:"@rbxts/t"})," for this, or you can define them manually."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"transform"})," method must return a ",(0,r.jsx)(t.code,{children:"TransformationResult"}),". To create one of these, you can use the\n",(0,r.jsx)(t.code,{children:"TransformResult.ok"})," and ",(0,r.jsx)(t.code,{children:"TransformResult.err"})," functions."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"suggestions"})," method is optional and should return an array of strings."]}),"\n",(0,r.jsx)(t.h3,{id:"expensive-types",children:'"Expensive" types'}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:'Not specifying a type that has a slow transformation function as "expensive" may cause the interface to lag.'})}),"\n",(0,r.jsx)(t.p,{children:"Occasionally, you may want to create a type where the transformation function might take a long time\nto execute. For example, a type that executes a web request to retrieve some data."}),"\n",(0,r.jsxs)(t.p,{children:["In this case, you can use the second parameter of ",(0,r.jsx)(t.code,{children:"TypeBuilder.transform"})," to indicate that the transformation is expensive."]}),"\n",(0,r.jsx)(t.p,{children:"This will prevent the type's transform function from being executed in the interface. For non-expensive types,\nthis is done each time the user types an argument, in order to indicate if the argument is valid."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"showLineNumbers",children:'// Expensive is set to "true" in the transform function, so the result\n// of this transformation will not be shown in the interface\nconst expensiveType = TypeBuilder.create<string>("expensive")\n\t.validate(t.string)\n\t.transform((text) => {\n\t\ttask.wait(3);\n\t\treturn TransformResult.ok(text);\n\t}, true)\n\t.build();\n'})}),"\n",(0,r.jsx)(t.h2,{id:"using-types",children:"Using types"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Your type must be ",(0,r.jsx)(t.a,{href:"/docs/guides/registration#types",children:"registered"})," in order to be used!"]})}),"\n",(0,r.jsx)(t.p,{children:"Types are primarily used when defining arguments - they specify what type the argument requires."}),"\n",(0,r.jsxs)(t.p,{children:["Let's say you have a ",(0,r.jsx)(t.code,{children:"kill"})," command that requires a ",(0,r.jsx)(t.code,{children:"Player"})," argument:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"showLineNumbers",children:'import { CommanderType } from "@rbxts/commander";\n\n@Commander()\nclass KillCommand {\n\t@Command({\n\t\tname: "kill",\n\t\tdescription: "Kills a player",\n\t\targuments: [\n\t\t\t{\n\t\t\t\tname: "player",\n\t\t\t\tdescription: "Player to kill",\n\t\t\t\ttype: CommanderType.Player,\n\t\t\t},\n\t\t],\n\t})\n\tkill(interaction: CommandInteraction, player: Player) {\n\t\tconst humanoid = player.Character?.FindFirstChildOfClass("Humanoid");\n\t\tif (humanoid === undefined) {\n\t\t\tinteraction.error(`${player.Name} does not have a Humanoid`);\n\t\t\treturn;\n\t\t}\n\n\t\thumanoid.Health = 0;\n\t\tinteraction.reply(`Successfully killed ${player.Name}`);\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CommanderType.Player"})," refers to\n",(0,r.jsx)(t.a,{href:"https://github.com/paradoxuum/commander/blob/main/src/shared/builtin/types/index.ts",children:"the name of the type"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"registering-types",children:"Registering types"}),"\n",(0,r.jsx)(t.p,{children:"Types need to be registered to be used."}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"/commander/docs/guides/registration#types",children:"Registration"})," guide to learn how types are registered."]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Types are used to transform text into another value and provide suggestions."}),"\n",(0,r.jsx)(t.li,{children:"They can optionally provide suggestions."}),"\n",(0,r.jsxs)(t.li,{children:["They should be defined using ",(0,r.jsx)(t.code,{children:"TypeBuilder"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["They should be ",(0,r.jsx)(t.a,{href:"/commander/docs/guides/registration#types",children:"registered"})," in order to be used."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7052:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var r=n(6651);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);