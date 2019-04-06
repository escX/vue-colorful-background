# vue-colorful-background
使用`vue`指令使节点背景色渐变切换

![demo gif](./v-colorful.gif)

## Install

```shell
npm install vue-colorful-background
```

## Usage

```js
// es6 import
import VueColorfulBackground from 'vue-colorful-background'

// 或者通过<script>引入
<script src="path/to/vue-colorful-background.js"></script>
```

```js
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
| `duration` | `String` | `2s` | 背景色过渡的耗时，其值与`css`属性`transition-duration`一致 |
| `timing` | `String` | `ease-in` | 背景色渐变速度曲线，其值与`css`属性`transition-timing-function`一致 |
| `colors` | `Array` | `[...]` | 背景色，默认提供`250`种颜色，颜色引用自[http://nipponcolors.com/](http://nipponcolors.com/) |
| `delay` | `Number` | `2000` | 背景色切换间隔 |

## Modifiers

`v-colorful`默认按照`colors`数组中的顺序切换背景色，使用`.random`修饰符可以使背景色随机切换

```html
<div v-colorful.random></div>
```