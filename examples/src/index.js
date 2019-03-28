import Vue from 'vue';
import App from './app.vue';
import VueColorfulBackground from '../../src/index';

Vue.use(VueColorfulBackground);

export default new Vue({
  el: '#app',
  render: h => h(App),
});
