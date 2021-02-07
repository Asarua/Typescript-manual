(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{481:function(t,e,v){"use strict";v.r(e);var _=v(18),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"配置-watch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置-watch"}},[t._v("#")]),t._v(" 配置 Watch")]),t._v(" "),v("p",[t._v("编译器支持使用环境变量配置如何监视文件和目录的变化。")]),t._v(" "),v("h2",{attrs:{id:"使用tsc-watchfile环境变量来配置文件监视"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用tsc-watchfile环境变量来配置文件监视"}},[t._v("#")]),t._v(" 使用 "),v("code",[t._v("TSC_WATCHFILE")]),t._v("  环境变量来配置文件监视")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[v("code",[t._v("PriorityPollingInterval")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("使用 "),v("code",[t._v("fs.watchFile")]),t._v("  但针对源码文件，配置文件和消失的文件使用不同的轮询间隔")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[v("code",[t._v("DynamicPriorityPolling")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("使用动态队列，对经常被修改的文件使用较短的轮询间隔，对未修改的文件使用较长的轮询间隔")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[v("code",[t._v("UseFsEvents")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("使用  "),v("code",[t._v("fs.watch")]),t._v(" ，它使用文件系统事件（但在不同的系统上可能不一定准确）来查询文件的修改 / 创建 / 删除。注意少数的系统如 Linux，对监视者的数量有限制，如果使用 "),v("code",[t._v("fs.watch")]),t._v("  创建监视失败那么将通过 "),v("code",[t._v("fs.watchFile")]),t._v("  来创建监视")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[v("code",[t._v("UseFsEventsWithFallbackDynamicPolling")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("此选项与 "),v("code",[t._v("UseFsEvents")]),t._v("  类似，只不过当使用 "),v("code",[t._v("fs.watch")]),t._v("  创建监视失败后，回退到使用动态轮询队列进行监视（如 "),v("code",[t._v("DynamicPriorityPolling")]),t._v("  介绍的那样）")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[v("code",[t._v("UseFsEventsOnParentDirectory")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("此选项通过 "),v("code",[t._v("fs.watch")]),t._v(" （使用系统文件事件）监视文件的父目录，因此 CPU 占用率低但也会降低精度")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("默认 （无指定值）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("如果环境变量 "),v("code",[t._v("TSC_NONPOLLING_WATCHER")]),t._v("  设置为 "),v("code",[t._v("true")]),t._v(" ，监视文件的父目录（如同 "),v("code",[t._v("UseFsEventsOnParentDirectory")]),t._v(" ）。否则，使用 "),v("code",[t._v("fs.watchFile")]),t._v("  监视文件，超时时间为 "),v("code",[t._v("250ms")]),t._v(" 。")])])])]),t._v(" "),v("h2",{attrs:{id:"使用tsc-watchdirectory环境变量来配置目录监视"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用tsc-watchdirectory环境变量来配置目录监视"}},[t._v("#")]),t._v(" 使用 "),v("code",[t._v("TSC_WATCHDIRECTORY")]),t._v("  环境变量来配置目录监视")]),t._v(" "),v("p",[t._v("在那些 Nodejs 原生就不支持递归监视目录的平台上，我们会根据 "),v("code",[t._v("TSC_WATCHDIRECTORY")]),t._v("  的不同选项递归地创建对子目录的监视。 注意在那些原生就支持递归监视目录的平台上（如 Windows），这个环境变量会被忽略。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[v("code",[t._v("RecursiveDirectoryUsingFsWatchFile")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("使用 "),v("code",[t._v("fs.watchFile")]),t._v("  监视目录和子目录，它是一个轮询监视（消耗 CPU 周期）")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[v("code",[t._v("RecursiveDirectoryUsingDynamicPriorityPolling")])]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("使用动态轮询队列来获取目录与其子目录的改变")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("默认 （无指定值）")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("使用 "),v("code",[t._v("fs.watch")]),t._v("  来监视目录及其子目录")])])])]),t._v(" "),v("h2",{attrs:{id:"背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),v("p",[t._v("在编译器中 "),v("code",[t._v("--watch")]),t._v("  的实现依赖于 Nodejs 提供的 "),v("code",[t._v("fs.watch")]),t._v("  和 "),v("code",[t._v("fs.watchFile")]),t._v(" ，两者各有优缺点。")]),t._v(" "),v("p",[v("code",[t._v("fs.watch")]),t._v("  使用文件系统事件通知文件及目录的变化。 但是它依赖于操作系统，且事件通知并不完全可靠，在很多操作系统上的行为难以预料。 还可能会有创建监视个数的限制，如 Linux 系统，在包含大量文件的程序中监视器个数很快被耗尽。 但也正是因为它使用文件系统事件，不需要占用过多的 CPU 周期。 典型地，编译器使用 "),v("code",[t._v("fs.watch")]),t._v("  来监视目录（比如配置文件里声明的源码目录，无法进行模块解析的目录）。 这样就可以处理改动通知不准确的问题。 但递归地监视仅在 Windows 和 OSX 系统上支持。 这就意味着在其它系统上要使用替代方案。")]),t._v(" "),v("p",[v("code",[t._v("fs.watchFile")]),t._v("  使用轮询，因此涉及到 CPU 周期。 但是这是最可靠的获取文件 / 目录状态的机制。 典型地，编译器使用 "),v("code",[t._v("fs.watchFile")]),t._v("  监视源文件，配置文件和消失的文件（失去文件引用），这意味着对 CPU 的使用依赖于程序里文件的数量。")])])}),[],!1,null,null,null);e.default=a.exports}}]);