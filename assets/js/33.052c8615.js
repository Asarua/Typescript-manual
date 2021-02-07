(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{398:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-3-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-3-6"}},[t._v("#")]),t._v(" TypeScript 3.6")]),t._v(" "),a("h2",{attrs:{id:"类成员的-constructor-现在被叫做-constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类成员的-constructor-现在被叫做-constructors"}},[t._v("#")]),t._v(" 类成员的  "),a("code",[t._v("constructor")]),t._v("  现在被叫做  "),a("code",[t._v("Constructors")])]),t._v(" "),a("p",[t._v("根据 ECMAScript 规范，使用名为  "),a("code",[t._v("constructor")]),t._v("  的方法的类声明现在是构造函数，无论它们是使用标识符名称还是字符串名称声明。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"constructor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"现在我是构造函数了。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("一个值得注意的例外，以及此改变的解决方法是使用名称计算结果为  "),a("code",[t._v("constructor")]),t._v("  的计算属性。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"constructor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我只是一个纯粹的方法，不是构造函数！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"dom-定义更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-定义更新"}},[t._v("#")]),t._v(" DOM 定义更新")]),t._v(" "),a("p",[a("code",[t._v("lib.dom.d.ts")]),t._v("  中移除或者修改了大量的定义。其中包括（但不仅限于）以下这些：")]),t._v(" "),a("ul",[a("li",[t._v("全局的  "),a("code",[t._v("window")]),t._v("  不再定义为  "),a("code",[t._v("Window")]),t._v(" ，它被更明确的定义  "),a("code",[t._v("type Window & typeof globalThis")]),t._v("  替代。在某些情况下，将它作为  "),a("code",[t._v("typeof window")]),t._v("  更好。")]),t._v(" "),a("li",[a("code",[t._v("GlobalFetch")]),t._v("  已经被移除。使用  "),a("code",[t._v("WindowOrWorkerGlobalScrope")]),t._v("  替代。")]),t._v(" "),a("li",[a("code",[t._v("Navigator")]),t._v("  上明确的非标准的属性已经被移除了。")]),t._v(" "),a("li",[a("code",[t._v("experimental-webgl")]),t._v("  上下文已经被移除了。使用  "),a("code",[t._v("webgl")]),t._v("  或  "),a("code",[t._v("webgl2")]),t._v("  替代。")])]),t._v(" "),a("p",[t._v("如果你认为其中的改变已经制造了错误，"),a("a",{attrs:{href:"https://github.com/Microsoft/TSJS-lib-generator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("请提交一个 issue"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"jsdoc-注释不再合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsdoc-注释不再合并"}},[t._v("#")]),t._v(" JSDoc 注释不再合并")]),t._v(" "),a("p",[t._v("在 JavaScript 文件中，TypeScript 只会在 JSDoc 注释之前立即查询以确定声明的类型。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} arg\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 你的其他注释信息\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoWritesFunctionsLikeThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'arg' 是 'any' 类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"关键字不能包含转义字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字不能包含转义字符"}},[t._v("#")]),t._v(" 关键字不能包含转义字符")]),t._v(" "),a("p",[t._v("之前的版本允许关键字包含转义字符。TypeScript 3.6 不允许。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \\u0063ontinue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  ~~~~~~~~~~~~~")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误！关键字不能包含转义字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-6/#breaking-changes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Announcing TypeScript 3.6"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);