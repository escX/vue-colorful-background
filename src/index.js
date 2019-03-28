export default {
  install(Vue) {
    Vue.directive('colorful', {
      inserted(el) {
        el.style.color = 'red';
      }
    })
  }
}