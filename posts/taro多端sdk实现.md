---
title: taro多端sdk实现
---

# taro 多端 sdk 实现

taro-weapp 包

processApis 实现对方法的绑定，将 wx 绑定到了 taro 对象上。

initNativeApi 方法中调用了 processApis 以及实现了其他的一些特殊绑定。

在 taro-weapp/src/index.js 中调用了 initNativeApi 方法，从而实现了将 wx 对象绑定到 taro 对象上。

然后在编译阶段， taro-mini-runner 的 processAst 方法中会转换为引入对应平台的包，在这里就是 taro-weapp。

通过以上过程，在最终编译出来的代码中，将 wx 对象下的一些方法经过部分改造与扩展绑定到了 taro 对象上。