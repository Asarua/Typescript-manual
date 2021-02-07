(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{441:function(t,s,e){"use strict";e.r(s);var a=e(18),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),e("p",[t._v("现在我们已经按照指南里的步骤写好一个声明文件，是时候把它发布到 npm 了。 有两种主要方式用来发布声明文件到 npm：")]),t._v(" "),e("ol",[e("li",[t._v("与你的 npm 包捆绑在一起，或")]),t._v(" "),e("li",[t._v("发布到 npm 上的"),e("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v(" @types organization"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("p",[t._v("如果你能控制要使用你发布的声明文件的那个 npm 包的话，推荐第一种方式。 这样的话，你的声明文件与 JavaScript 总是在一起传递。")]),t._v(" "),e("h2",{attrs:{id:"包含声明文件到你的npm包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包含声明文件到你的npm包"}},[t._v("#")]),t._v(" 包含声明文件到你的 npm 包")]),t._v(" "),e("p",[t._v("如果你的包有一个主 "),e("code",[t._v(".js")]),t._v("  文件，你还是需要在 "),e("code",[t._v("package.json")]),t._v("  里指定主声明文件。 设置 "),e("code",[t._v("types")]),t._v("  属性指向捆绑在一起的声明文件。 比如：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"awesome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vandelay Industries"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.d.ts"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("注意 "),e("code",[t._v('"typings"')]),t._v("  与 "),e("code",[t._v('"types"')]),t._v("  具有相同的意义，也可以使用它。")]),t._v(" "),e("p",[t._v("同样要注意的是如果主声明文件名是 "),e("code",[t._v("index.d.ts")]),t._v("  并且位置在包的根目录里（与 "),e("code",[t._v("index.js")]),t._v("  并列），你就不需要使用 "),e("code",[t._v('"types"')]),t._v("  属性指定了。")]),t._v(" "),e("h3",{attrs:{id:"依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),e("p",[t._v("所有的依赖是由 npm 管理的。 确保所依赖的声明包都在 "),e("code",[t._v("package.json")]),t._v("  的 "),e("code",[t._v('"dependencies"')]),t._v("  里指明了 比如，假设我们写了一个包它依赖于 Browserify 和 TypeScript。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browserify-typescript-extension"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vandelay Industries"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./lib/main.d.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browserify"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@types/browserify"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typescript"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"next"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("这里，我们的包依赖于 "),e("code",[t._v("browserify")]),t._v("  和 "),e("code",[t._v("typescript")]),t._v("  包。  "),e("code",[t._v("browserify")]),t._v("  没有把它的声明文件捆绑在它的 npm 包里，所以我们需要依赖于 "),e("code",[t._v("@types/browserify")]),t._v("  得到它的声明文件。  "),e("code",[t._v("typescript")]),t._v("  相反，它把声明文件放在了 npm 包里，因此我们不需要依赖额外的包。")]),t._v(" "),e("p",[t._v("我们的包要从这两个包里暴露出声明文件，因此 "),e("code",[t._v("browserify-typescript-extension")]),t._v("  的用户也需要这些依赖。 正因此，我们使用 "),e("code",[t._v('"dependencies"')]),t._v("  而不是 "),e("code",[t._v('"devDependencies"')]),t._v(" ，否则用户将需要手动安装那些包。 如果我们只是在写一个命令行应用，并且我们的包不会被当做一个库使用的话，那么我就可以使用 "),e("code",[t._v("devDependencies")]),t._v(" 。")]),t._v(" "),e("h3",{attrs:{id:"危险信号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#危险信号"}},[t._v("#")]),t._v(" 危险信号")]),t._v(" "),e("h4",{attrs:{id:"reference-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference-path"}},[t._v("#")]),t._v(" "),e("code",[t._v('/// <reference path="..." />')])]),t._v(" "),e("p",[t._v("_不要_在声明文件里使用 "),e("code",[t._v('/// <reference path="..." />')]),t._v(" 。")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference path="../typescript/lib/typescriptServices.d.ts" />')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),e("p",[t._v("_应该_使用 "),e("code",[t._v('/// <reference types="..." />')]),t._v("  代替")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="typescript" />')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),e("p",[t._v("务必阅读"),e("RouterLink",{attrs:{to:"/download/introduction/library-structures.html#consuming-dependencies"}},[t._v("使用依赖")]),t._v("一节了解详情。")],1),t._v(" "),e("h4",{attrs:{id:"打包所依赖的声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包所依赖的声明"}},[t._v("#")]),t._v(" 打包所依赖的声明")]),t._v(" "),e("p",[t._v("如果你的类型声明依赖于另一个包：")]),t._v(" "),e("ul",[e("li",[t._v("_不要_把依赖的包放进你的包里，保持它们在各自的文件里。")]),t._v(" "),e("li",[t._v("_不要_将声明拷贝到你的包里。")]),t._v(" "),e("li",[t._v("_应该_依赖于 npm 类型声明包，如果依赖包没包含它自己的声明的话。")])]),t._v(" "),e("h2",{attrs:{id:"发布到-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布到-types"}},[t._v("#")]),t._v(" 发布到"),e("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v(" @types"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types"),e("OutboundLink")],1),t._v(" 下面的包是从"),e("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v(" DefinitelyTyped"),e("OutboundLink")],1),t._v(" 里自动发布的，通过"),e("a",{attrs:{href:"https://github.com/Microsoft/types-publisher",target:"_blank",rel:"noopener noreferrer"}},[t._v(" types-publisher 工具"),e("OutboundLink")],1),t._v("。 如果想让你的包发布为 @types 包，提交一个 pull request 到"),e("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v(" https://github.com/DefinitelyTyped/DefinitelyTyped"),e("OutboundLink")],1),t._v("。 在这里查看详细信息"),e("a",{attrs:{href:"http://definitelytyped.org/guides/contributing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" contribution guidelines page"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=r.exports}}]);