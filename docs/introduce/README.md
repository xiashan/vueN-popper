---
sidebar: auto
sidebarDepth: 2
---

# vueN-popper
> a vue component for complex popover, based on <a href="https://popper.js.org/">popper.js</a>

## Install

#### NPM

``` bash
npm install vuen-popper --save
```

#### Yarn

``` bash
yarn add vuen-popper
```

## Usage

适合复杂弹出层，弹出层独立成单独文件，Mixin实现复用

只支持点击事件，组件本身不支持点击dom其他区域关闭弹层

默认使用element-ui的样式，如果没有引用element-ui，则需要自己实现

::: tip
TODO： slot支持
:::

使用方法：

引入插件，处理弹层展现，隐藏，以及监听数据变化
```JS
import NoxPopper from 'vuen-popper'

export default {
  mixins: [NoxPopper],

  methods: {
    handlePopClick(id) {
    },

    hidePicker() {
    },

    showPicker() {
    },

    mountPicker() {
    },

    handleClose(el) {
    },

    unmountPicker() {
    }
  }
}
```

弹层展现的内容

```vue
<template>
  <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      class="el-picker-panel el-select-picker el-popper"
    >
      <div class="header">{{this.title}}</div>

      <div>This is popper</div>

      <div class="footer">
        <button class="el-button el-button--default el-button--small" @click="cancel">Cancel</button>
        <button class="el-button el-button--primary el-button--small" @click="apply">Apply</button>
      </div>
    </div>
  </transition>
</template>
```

<demo />



## Props

| Props               | Type      | Default                       | Description            |
| --------------------|:----------| ------------------------------|------------------------|
| reference           | Object    |                               | 定位popper的参考         |
| popper              | Object    |                               | 弹窗的对象               |
| boundariesSelector  | String    |                               | 弹窗的边界，默认窗口       |
| disabled            | Boolean   | false                         | 点击不显示popper         |
| visibleArrow        | Boolean   | true                          |                        |
| appendToBody        | Boolean   | true                          |                        |
| options             | Object    |                               |  {<br>placement: 'bottom',<br>positionFixed: false,<br>eventsEnabled: true,<br>removeOnDestroy: false,<br>onCreate: function,<br>onUpdate: function,<br>modifiers: {}<br>}<br>具体参数参考popper.js                      |


## Events
| Name            | Params                   | Description  |
| ----------------|:-------------------------|--------------|
| show            |                          | show popper  |
| hide            |                          | hide popper  |
| created         |                          | create popper|
