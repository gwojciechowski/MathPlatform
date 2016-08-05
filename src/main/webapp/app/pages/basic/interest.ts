import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultService } from './resultService';

/*
  Generated class for the InterestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/basic/interest.html',
  providers: [ResultService]
})

export class InterestPage {
  public resultService: ResultService;
  private interestResult: any;
  
  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.resultService = resultService;
    this.interestResult = '';
  }

  sendInterestCapitalization(initialCapital: number, interestRate: number, amountOfInterest: number){
    this.resultService.interestCapitalization(initialCapital, interestRate, amountOfInterest).subscribe(res => {
      this.interestResult = res;
    })
  }
}