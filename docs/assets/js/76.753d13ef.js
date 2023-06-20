(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{583:function(t,s,e){t.exports=e.p+"assets/img/6-1.7d0c763e.png"},742:function(t,s,e){"use strict";e.r(s);var a=e(62),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_6-1-可滚动组件简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-可滚动组件简介"}},[t._v("#")]),t._v(" 6.1 可滚动组件简介")]),t._v(" "),a("h2",{attrs:{id:"_6-1-1-sliver布局模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-sliver布局模型"}},[t._v("#")]),t._v(" 6.1.1 Sliver布局模型")]),t._v(" "),a("p",[t._v("我们在 "),a("RouterLink",{attrs:{to:"/chapter4/constraints.html"}},[t._v("4.2 节")]),t._v(" 介绍过Flutter 有两种布局模型：")],1),t._v(" "),a("ul",[a("li",[t._v("基于 RenderBox 的盒模型布局。")]),t._v(" "),a("li",[t._v("基于 Sliver ( RenderSliver ) 按需加载列表布局。")])]),t._v(" "),a("p",[t._v("之前我们主要介绍了盒模型布局组件，本章我们重点介绍基于Sliver的布局组件。")]),t._v(" "),a("p",[t._v("通常可滚动组件的子组件可能会非常多、占用的总高度也会非常大；如果要一次性将子组件全部构建出将会非常昂贵！为此，Flutter中提出一个Sliver（中文为“薄片”的意思）概念，Sliver 可以包含一个或多个子组件。Sliver 的主要作用是配合：加载子组件并确定每一个子组件的布局和绘制信息，如果 Sliver 可以包含多个子组件时，通常会实现按需加载模型。")]),t._v(" "),a("p",[t._v("只有当 Sliver 出现在视口中时才会去构建它，这种模型也称为“基于Sliver的列表按需加载模型”。可滚动组件中有很多都支持基于Sliver的按需加载模型，如"),a("code",[t._v("ListView")]),t._v("、"),a("code",[t._v("GridView")]),t._v("，但是也有不支持该模型的，如"),a("code",[t._v("SingleChildScrollView")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("约定：后面如果我们说一个组件是Sliver 则表示它是基于Sliver布局的组件，同理，说一个组件是 RenderBox，则代表它是基于盒模型布局的组件，并不是说它就是 RenderBox 类的实例。")])]),t._v(" "),a("p",[t._v("Flutter 中的可滚动组件主要由三个角色组成：Scrollable、Viewport 和 Sliver：")]),t._v(" "),a("ul",[a("li",[t._v("Scrollable ：用于处理滑动手势，确定滑动偏移，滑动偏移变化时构建 Viewport 。")]),t._v(" "),a("li",[t._v("Viewport：显示的视窗，即列表的可视区域；")]),t._v(" "),a("li",[t._v("Sliver：视窗里显示的元素。")])]),t._v(" "),a("p",[t._v("具体布局过程：")]),t._v(" "),a("ol",[a("li",[t._v("Scrollable 监听到用户滑动行为后，根据最新的滑动偏移构建 Viewport 。")]),t._v(" "),a("li",[t._v("Viewport 将当前视口信息和配置信息通过 SliverConstraints 传递给 Sliver。")]),t._v(" "),a("li",[t._v("Sliver 中对子组件（RenderBox）按需进行构建和布局，然后确认自身的位置、绘制等信息，保存在 geometry 中（一个 SliverGeometry 类型的对象）。")])]),t._v(" "),a("p",[t._v("比如有一个 ListView，大小撑满屏幕，假设它有 100 个列表项（都是RenderBox）且每个列表项高度相同，结构如图6-1所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(583),alt:"图6-1"}})]),t._v(" "),a("p",[t._v("图中白色区域为设备屏幕，也是 Scrollable 、 Viewport  和 Sliver 所占用的空间，三者所占用的空间重合，父子关系为：Sliver 父组件为 Viewport，Viewport的 父组件为 Scrollable 。注意ListView 中只有一个 Sliver，在 Sliver 中实现了子组件（列表项）的按需加载和布局。")]),t._v(" "),a("p",[t._v("其中顶部和底部灰色的区域为 cacheExtent，它表示预渲染的高度，需要注意这是在可视区域之外，如果 RenderBox 进入这个区域内，即使它还未显示在屏幕上，也是要先进行构建的，预渲染是为了后面进入 Viewport 的时候更丝滑。cacheExtent 的默认值是 250，在构建可滚动列表时我们可以指定这个值，这个值最终会传给 Viewport。")]),t._v(" "),a("h2",{attrs:{id:"_6-1-2-scrollable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-scrollable"}},[t._v("#")]),t._v(" 6.1.2 Scrollable")]),t._v(" "),a("p",[t._v("用于处理滑动手势，确定滑动偏移，滑动偏移变化时构建 Viewport，我们看一下其关键的属性：")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scrollable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axisDirection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AxisDirection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("down"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("physics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  required "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewportBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后面介绍")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("axisDirection")]),t._v(" 滚动方向。")]),t._v(" "),a("li",[a("code",[t._v("physics")]),t._v("：此属性接受一个"),a("code",[t._v("ScrollPhysics")]),t._v("类型的对象，它决定可滚动组件如何响应用户操作，比如用户滑动完抬起手指后，继续执行动画；或者滑动到边界时，如何显示。默认情况下，Flutter会根据具体平台分别使用不同的"),a("code",[t._v("ScrollPhysics")]),t._v("对象，应用不同的显示效果，如当滑动到边界时，继续拖动的话，在 iOS 上会出现弹性效果，而在 Android 上会出现微光效果。如果你想在所有平台下使用同一种效果，可以显式指定一个固定的"),a("code",[t._v("ScrollPhysics")]),t._v("，Flutter SDK中包含了两个"),a("code",[t._v("ScrollPhysics")]),t._v("的子类，他们可以直接使用：\n"),a("ul",[a("li",[a("code",[t._v("ClampingScrollPhysics")]),t._v("：列表滑动到边界时将不能继续滑动，通常在Android 中 配合 "),a("code",[t._v("GlowingOverscrollIndicator")]),t._v("（实现微光效果的组件） 使用。")]),t._v(" "),a("li",[a("code",[t._v("BouncingScrollPhysics")]),t._v("：iOS 下弹性效果。")])])]),t._v(" "),a("li",[a("code",[t._v("controller")]),t._v("：此属性接受一个"),a("code",[t._v("ScrollController")]),t._v("对象。"),a("code",[t._v("ScrollController")]),t._v("的主要作用是控制滚动位置和监听滚动事件。默认情况下，Widget树中会有一个默认的"),a("code",[t._v("PrimaryScrollController")]),t._v("，如果子树中的可滚动组件没有显式的指定"),a("code",[t._v("controller")]),t._v("，并且"),a("code",[t._v("primary")]),t._v("属性值为"),a("code",[t._v("true")]),t._v("时（默认就为"),a("code",[t._v("true")]),t._v("），可滚动组件会使用这个默认的"),a("code",[t._v("PrimaryScrollController")]),t._v("。这种机制带来的好处是父组件可以控制子树中可滚动组件的滚动行为，例如，"),a("code",[t._v("Scaffold")]),t._v("正是使用这种机制在iOS中实现了点击导航栏回到顶部的功能。我们将在6.4节详细介绍"),a("code",[t._v("ScrollController")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("viewportBuilder")]),t._v("：构建 Viewport 的回调。当用户滑动时，Scrollable 会调用此回调构建新的 Viewport，同时传递一个 ViewportOffset 类型的 offset 参数，该参数描述 Viewport 应该显示那一部分内容。注意重新构建 Viewport 并不是一个昂贵的操作，因为 Viewport 本身也是 Widget，只是配置信息，Viewport 变化时对应的 RenderViewport 会更新信息，并不会随着 Widget 进行重新构建。")])]),t._v(" "),a("h3",{attrs:{id:"主轴和纵轴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主轴和纵轴"}},[t._v("#")]),t._v(" 主轴和纵轴")]),t._v(" "),a("p",[t._v("在可滚动组件的坐标描述中，通常将滚动方向称为主轴，非滚动方向称为纵轴。由于可滚动组件的默认方向一般都是沿垂直方向，所以默认情况下主轴就是指垂直方向，水平方向同理。")]),t._v(" "),a("h2",{attrs:{id:"_6-1-3-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-3-viewport"}},[t._v("#")]),t._v(" 6.1.3 Viewport")]),t._v(" "),a("p",[t._v("Viewport 比较简单，用于渲染当前视口中需要显示 Sliver。")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Viewport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axisDirection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AxisDirection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("down"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crossAxisDirection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anchor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  required "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewportOffset")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户的滚动偏移")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型为Key，表示从什么地方开始绘制，默认是第一个元素")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheExtent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 预渲染区域")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该参数用于配合解释cacheExtent的含义，也可以为主轴长度的乘数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheExtentStyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CacheExtentStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pixel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clipBehavior "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Clip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hardEdge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" slivers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要显示的 Sliver 列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("需要注意的是：")]),t._v(" "),a("ul",[a("li",[t._v("offset：该参数为Scrollabel 构建 Viewport 时传入，它描述了 Viewport 应该显示那一部分内容。")]),t._v(" "),a("li",[t._v("cacheExtent 和 cacheExtentStyle：CacheExtentStyle 是一个枚举，有 pixel 和 viewport 两个取值。当 cacheExtentStyle 值为 pixel 时，cacheExtent 的值为预渲染区域的具体像素长度；当值为 viewport 时，cacheExtent 的值是一个乘数，表示有几个 viewport 的长度，最终的预渲染区域的像素长度为：cacheExtent * viewport 的积， 这在每一个列表项都占满整个 Viewport 时比较实用，这时 cacheExtent 的值就表示前后各缓存几个页面。")])]),t._v(" "),a("h2",{attrs:{id:"_6-1-4-sliver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-4-sliver"}},[t._v("#")]),t._v(" 6.1.4 Sliver")]),t._v(" "),a("p",[t._v("Sliver 主要作用是对子组件进行构建和布局，比如 ListView 的 Sliver 需要实现子组件（列表项）按需加载功能，只有当列表项进入预渲染区域时才会去对它进行构建和布局、渲染。")]),t._v(" "),a("p",[t._v("Sliver 对应的渲染对象类型是 RenderSliver，RenderSliver 和 RenderBox 的相同点是都继承自 RenderObject 类，不同点是在布局的时候约束信息不同。RenderBox 在布局时父组件传递给它的约束信息对应的是 "),a("code",[t._v("BoxConstraints")]),t._v("，只包含最大宽高的约束；而 RenderSliver 在布局时父组件（列表）传递给它的约束是对应的是 "),a("code",[t._v("SliverConstraints")]),t._v("。关于 Sliver 的布局协议，我们将在本章最后一节中介绍。")]),t._v(" "),a("h2",{attrs:{id:"_6-1-5-可滚动组件的通用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-5-可滚动组件的通用配置"}},[t._v("#")]),t._v(" 6.1.5 可滚动组件的通用配置")]),t._v(" "),a("p",[t._v("几乎所有的可滚动组件在构造时都能指定 "),a("code",[t._v("scrollDirection")]),t._v("（滑动的主轴）、"),a("code",[t._v("reverse")]),t._v("（滑动方向是否反向）、"),a("code",[t._v("controller")]),t._v("、"),a("code",[t._v("physics")]),t._v(" 、"),a("code",[t._v("cacheExtent")]),t._v(" ，这些属性最终会透传给对应的 Scrollable 和 Viewport，这些属性我们可以认为是可滚动组件的通用属性，后续再介绍具体的可滚动组件时将不再赘述。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("reverse")]),t._v("表示是否按照阅读方向相反的方向滑动，如："),a("code",[t._v("scrollDirection")]),t._v("值为"),a("code",[t._v("Axis.horizontal")]),t._v(" 时，即滑动发现为水平，如果阅读方向是从左到右（取决于语言环境，阿拉伯语就是从右到左）。"),a("code",[t._v("reverse")]),t._v("为"),a("code",[t._v("true")]),t._v("时，那么滑动方向就是从右往左。")])]),t._v(" "),a("h2",{attrs:{id:"_6-1-6-scrollcontroller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-6-scrollcontroller"}},[t._v("#")]),t._v(" 6.1.6 ScrollController")]),t._v(" "),a("p",[t._v("可滚动组件都有一个 controller 属性，通过该属性我们可以指定一个 ScrollController 来控制可滚动组件的滚动，比如可以通过ScrollController来同步多个组件的滑动联动。由于 ScrollController 是需要结合可滚动组件一起工作，所以本章中，我们会在介绍完 ListView 后详细介绍 ScrollController。")]),t._v(" "),a("h2",{attrs:{id:"_6-1-7-子节点缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-7-子节点缓存"}},[t._v("#")]),t._v(" 6.1.7 子节点缓存")]),t._v(" "),a("p",[t._v("按需加载子组件在大多数场景中都能有正收益，但是有些时候也会有副作用。比如有一个页面，它由一个ListView 组成，我们希望在页面顶部显示一块内容， 这部分内容的数据需要在每次页面打开时通过网络来获取，为此我们通一个 Header 组件来实现，它是一个 StatefulWidget ，会在"),a("code",[t._v("initState")]),t._v(" 中请求网络数据，然后将它作为 ListView 的第一个孩子。现在问题来了，因为 ListView 是按需加载子节点的，这意味着如果 Header 滑出 Viewport 的预渲染区域之外时就会被销毁，重新滑入后又会被重新构建，这样就会发起多次网络请求，不符合我们期望，我们预期是Header能够缓存不销毁。")]),t._v(" "),a("p",[t._v("综上，为了方便控制子组件在滑出可视区域后是否缓存，可滚动组件提供了一种缓存子节点的通用解决方案，它允许开发者对特定的子界限进行缓存，这个我们将在后面小节中详细介绍。")]),t._v(" "),a("h2",{attrs:{id:"_6-1-8-scrollbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-8-scrollbar"}},[t._v("#")]),t._v(" 6.1.8 Scrollbar")]),t._v(" "),a("p",[a("code",[t._v("Scrollbar")]),t._v("是一个Material风格的滚动指示器（滚动条），如果要给可滚动组件添加滚动条，只需将"),a("code",[t._v("Scrollbar")]),t._v("作为可滚动组件的任意一个父级组件即可，如：")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scrollbar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingleChildScrollView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("Scrollbar")]),t._v("和"),a("code",[t._v("CupertinoScrollbar")]),t._v("都是通过监听滚动通知来确定滚动条位置的。关于的滚动通知的详细内容我们将在本章最后一节中专门介绍。")]),t._v(" "),a("h3",{attrs:{id:"cupertinoscrollbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cupertinoscrollbar"}},[t._v("#")]),t._v(" CupertinoScrollbar")]),t._v(" "),a("p",[a("code",[t._v("CupertinoScrollbar")]),t._v("是 iOS 风格的滚动条，如果你使用的是"),a("code",[t._v("Scrollbar")]),t._v("，那么在iOS平台它会自动切换为"),a("code",[t._v("CupertinoScrollbar")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_6-1-9-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-9-总结"}},[t._v("#")]),t._v(" 6.1.9 总结")]),t._v(" "),a("p",[t._v("本节我们介绍了 Flutter 中基于 Sliver 按需加载列表布局，后面的小节中我们会先介绍一下常用的可滚动组件（如"),a("code",[t._v("ListView")]),t._v("、"),a("code",[t._v("GridView")]),t._v("、"),a("code",[t._v("CustomScrollView")]),t._v("等），然后介绍一下"),a("code",[t._v("ScrollController")]),t._v("，最后我们通过一个实例介绍一下如何自定义 Sliver 。")])])}),[],!1,null,null,null);s.default=r.exports}}]);