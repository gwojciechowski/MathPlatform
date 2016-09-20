import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatisticService } from './statisticService';

/*
  Generated class for the MedianPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/statistic/median.html',
  providers: [StatisticService]
})

export class MedianPage {
  public statisticService: StatisticService;
  private medianResult: any;
  
  constructor(private navCtrl: NavController, statisticService: StatisticService) {
    this.statisticService = statisticService;
    this.medianResult = '';
  }

  sendMedian(medianNumber: string){
    var medianNumberArray = medianNumber.split(',').map(Number);
    this.statisticService.median(medianNumberArray).subscribe(res => {
      this.medianResult = res;
    })
  }
}