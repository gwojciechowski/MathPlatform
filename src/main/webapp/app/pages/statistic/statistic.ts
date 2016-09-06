import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArithmeticPage } from './arithmetic';
import { MedianPage } from './median';
import { VariancePage } from './variance';

/*
  Generated class for the StatisticPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/statistic/statistic.html',
})
export class StatisticPage {

    arithmeticPage = ArithmeticPage;
    medianPage = MedianPage;
    variancePage = VariancePage;

  constructor(private nav: NavController) {

  }

}
