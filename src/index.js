import directive from './directive';

export default {
  install(Vue) {
    Vue.directive('colorful', directive);
  }
};
