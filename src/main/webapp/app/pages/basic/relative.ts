import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultService } from './resultService';

/*
  Generated class for the RelativePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/basic/relative.html',
  providers: [ResultService]
})

export class RelativePage {
  public resultService: ResultService;
  private relativeResult: any;
  
  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.resultService = resultService;
    this.relativeResult = '';
  }

  sendRelativeError(exactValue: number, estimatedValue: number){
    this.resultService.relativeError(exactValue, estimatedValue).subscribe(res => {
      this.relativeResult = res;
    })
  }
}