import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {BasicPage} from './pages/basic/basic';
import {StatisticPage} from './pages/statistic/statistic';
import {FunctionPage} from './pages/function/function';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
@ViewChild(Nav) nav: Nav;
rootPage: any = BasicPage;
pages: Array<{title: string, component: any}>;

constructor(private platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Basic Expressions', component: BasicPage },
      { title: 'Statistic Elements', component: StatisticPage },
      { title: 'Functions', component: FunctionPage }
    ];
  }

initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
