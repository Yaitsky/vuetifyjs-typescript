import Vue from 'vue';
import VueRouter from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { createRouter } from './router';

import Vuetify from 'vuetify';

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}});

const appComponent = () => import('./components/app').then(({ AppComponent }) => AppComponent);
// const appComponent = () => import(/* webpackChunkName: 'app' */'./components/app').then(({ AppComponent }) => AppComponent);

import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const appModuleId = './components/app';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(appModuleId, appComponent,
    module.hot.accept('./components/app', () => reload(appModuleId, (<any>require('./components/app')).AppComponent)));
}

new Vue({
  el: '#app',
  router: createRouter(),
  components: {
    'app': appComponent
  }
});
