import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatisticService } from './statisticService';

/*
  Generated class for the PrimePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/statistic/arithmetic.html',
  providers: [StatisticService]
})

export class ArithmeticPage {
  public statisticService: StatisticService;
  private arithmeticResult: any;
  
  constructor(private navCtrl: NavController, statisticService: StatisticService) {
    this.statisticService = statisticService;
    this.arithmeticResult = '';
  }

  sendArithmeticAverage(arithmeticNumber: string){
    var arithmeticNumberArray = arithmeticNumber.split(',').map(Number);
    this.statisticService.arithmeticAverage(arithmeticNumberArray).subscribe(res => {
      this.arithmeticResult = res;
    })
  }
}