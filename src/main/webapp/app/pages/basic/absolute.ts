import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultService } from './resultService';

/*
  Generated class for the AbsolutePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/basic/absolute.html',
  providers: [ResultService]
})


export class AbsolutePage {
  public resultService: ResultService;
  private absoluteResult: any;
  private absoluteLatex: any;
  
  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.resultService = resultService;
    this.absoluteResult = '';
  }

  sendAbsoluteError(exactValue: number, relativeError: number){
    this.resultService.absoluteError(exactValue, relativeError).subscribe(res => {
      this.absoluteResult = res;
    })
  }
}