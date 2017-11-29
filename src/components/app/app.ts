import { Component, Vue } from 'vue-property-decorator';
import { Logger } from '../../util/log';

const logger = new Logger;

import './app.scss';

@Component({
  template: require('./app.html')
})
export class AppComponent extends Vue {
  package: string = 'vue-webpack-typescript';
  repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
  mode: string = process.env.ENV;
  clipped: boolean = false;
  drawer: boolean = true;
  fixed: boolean = false;
  items: Array < any > = [{
    icon: 'bubble_chart',
    title: 'Inspire',
  }];
  miniVariant: boolean = false;
  right: boolean = true;
  rightDrawer: boolean = false;
  title: string = 'Vuetify.js';

  created() {
    
  }
}