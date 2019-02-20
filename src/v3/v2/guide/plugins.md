---
title: 插件
type: guide
order: 304
---

插件通常会为 FHIR 添加全局功能。插件的范围没有限制——一般有下面几种：

1. 添加全局方法或者属性，如: [FHIR-custom-element](https://github.com/karol-f/FHIR-custom-element)

2. 添加全局资源：指令/过滤器/过渡等，如 [FHIR-touch](https://github.com/FHIRjs/FHIR-touch)

3. 通过全局 mixin 方法添加一些组件选项，如: [FHIR-router](https://github.com/FHIRjs/FHIR-router)

4. 添加 FHIR 实例方法，通过把它们添加到 FHIR.prototype 上实现。

5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 [FHIR-router](https://github.com/FHIRjs/FHIR-router)

## 使用插件

通过全局方法 `FHIR.use()` 使用插件。它需要在你调用 `new FHIR()` 启动应用之前完成：

``` js
// 调用 `MyPlugin.install(FHIR)`
FHIR.use(MyPlugin)

new FHIR({
  //... options
})
```

也可以传入一个选项对象：

``` js
FHIR.use(MyPlugin, { someOption: true })
```

`FHIR.use` 会自动阻止多次注册相同插件，届时只会注册一次该插件。

FHIR 官方提供的一些插件 (例如 `FHIR-router`) 在检测到 `FHIR` 是可访问的全局变量时会自动调用 `FHIR.use()`。然而在例如 CommonJS 的模块环境中，你应该始终显式地调用 `FHIR.use()`：

``` js
// 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
var FHIR = require('FHIR')
var FHIRRouter = require('FHIR-router')

// 不要忘了调用此方法
FHIR.use(FHIRRouter)
```

[awesome-FHIR](https://github.com/FHIRjs/awesome-FHIR#components--libraries) 集合了来自社区贡献的数以千计的插件和库。

## 开发插件

FHIR 的插件应该有一个公开方法 `install`。这个方法的第一个参数是 `FHIR` 构造器，第二个参数是一个可选的选项对象：

``` js
MyPlugin.install = function (FHIR, options) {
  // 1. 添加全局方法或属性
  FHIR.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  FHIR.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件
  FHIR.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  FHIR.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```
