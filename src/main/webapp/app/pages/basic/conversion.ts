import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultService } from './resultService';

/*
  Generated class for the ConversionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/basic/conversion.html',
  providers: [ResultService]
})
export class ConversionPage {
  public resultService: ResultService;
  private romanResult: any;
  private arabicResult: any;
  
  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.resultService = resultService;
    this.romanResult = '';
    this.arabicResult = '';
  }

  sendArabicToRoman(arabicNumber: number){
    this.resultService.arabicToRoman(arabicNumber).subscribe(res => {
      this.romanResult = res;
    })
  }

  sendRomanToArabic(romanNumber: Text){
    this.resultService.romanToArabic(romanNumber).subscribe(res => {
      this.arabicResult = res;
    })
  }

}
