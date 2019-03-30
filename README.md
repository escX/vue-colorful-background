# vue-colorful-background
使用`vue`指令生成一个背景色不断切换的节点

![gif](./v-colorful.gif)

## Install

```shell
npm install vue-colorful-background
```

## Usage

```js
import VueColorfulBackground from 'vue-colorful-background'

// 全局注册
Vue.use(VueColorfulBackground)

// 或者局部注册
new Vue({
  directives: {VueColorfulBackground}
})
```

```html
<div v-colorful="options"></div>

<script>
// ...
data () {
  return {
    options: {

    }
  }
}
</script>
```

## Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `duration` | `String` | `2s` | 背景色过渡的耗时，其值与css属性transition-duration一致 |
| `timing` | `String` | `ease-in` | 背景色渐变速度曲线，其值与css属性transition-timing-function一致 |
| `colors` | `Array` | `[...]` | 背景色，默认提供250种颜色 |
| `delay` | `Number` | `2000` | 背景色切换间隔 |

## Modifiers

使用`.random`修饰符可以使背景色随机切换

```html
<div v-colorful.random></div>
```