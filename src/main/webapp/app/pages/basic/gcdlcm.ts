import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultService } from './resultService';

/*
  Generated class for the Gcdlcm Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/basic/gcdlcm.html',
  providers: [ResultService]
})

export class GcdlcmPage {
  public resultService: ResultService;
  private gcdResult: any;
  private lcmResult: any;
  
  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.resultService = resultService;
    this.gcdResult = '';
    this.lcmResult = '';
  }

  sendGcd(aGcd: number, bGcd: number){
    this.resultService.gcd(aGcd, bGcd).subscribe(res => {
      this.gcdResult = res;
    })
  }

  sendLcm(aLcm: number, bLcm: number){
    this.resultService.lcm(aLcm, bLcm).subscribe(res => {
      this.lcmResult = res;
    })
  }
}