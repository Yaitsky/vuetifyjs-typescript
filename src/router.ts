import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';

const appComponent = () => import('./components/app').then(({ AppComponent }) => AppComponent);
// const homeComponent = () => import(/* webpackChunkName: 'home' */'./components/home').then(({ HomeComponent }) => HomeComponent);

if (process.env.ENV === 'development' && module.hot) {
  const appModuleId = './components/app';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(appModuleId, appComponent,
    module.hot.accept('./components/app', () => reload(appModuleId, (<any>require('./components/app')).appComponent)));
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
