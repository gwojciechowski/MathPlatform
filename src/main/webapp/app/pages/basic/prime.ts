import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultService } from './resultService';

/*
  Generated class for the PrimePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/basic/prime.html',
  providers: [ResultService]
})

export class PrimePage {
  public resultService: ResultService;
  private primeResult: any;
  
  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.resultService = resultService;
    this.primeResult = '';
  }

  sendPrimeFactors(primeNumber: number){
    this.resultService.primeFactors(primeNumber).subscribe(res => {
      this.primeResult = res;
    })
  }
}