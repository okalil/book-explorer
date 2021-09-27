import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  data: { currentRoute: window.location.pathname },
  render: h => h(App),
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
