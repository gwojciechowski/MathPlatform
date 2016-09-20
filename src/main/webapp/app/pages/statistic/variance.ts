import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatisticService } from './statisticService';

/*
  Generated class for the VariancePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/statistic/variance.html',
  providers: [StatisticService]
})

export class VariancePage {
  public statisticService: StatisticService;
  private varianceResult: any;
  
  constructor(private navCtrl: NavController, statisticService: StatisticService) {
    this.statisticService = statisticService;
    this.varianceResult = '';
  }

  sendVariance(varianceNumber: string){
    var varianceNumberArray = varianceNumber.split(',').map(Number);
    this.statisticService.variance(varianceNumberArray).subscribe(res => {
      this.varianceResult = res;
    })
  }
}