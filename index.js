import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/ja';
import locale from 'element-ui/lib/locale';
import App from './App';

locale.use(lang);

new Vue({
  el: '#app',
  components: { App },
  render() {
    <div id="app">
      <App />
    </div>
  },
});
