import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultService} from './resultService';
import {AboutPage} from '../about/about';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [ResultService]
})
export class HomePage {
  public resultService: ResultService;
  private dicksonPost: any;
  private dicksonPost_2: any;
  aboutPage = AboutPage;



  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.resultService = resultService;
    this.dicksonPost = '';
    this.dicksonPost_2 = '';
  }

  sendArabicToRoman(arabicNumber: number){
    this.resultService.arabicToRoman(arabicNumber).subscribe(res => {
      this.dicksonPost = res;
    })
  }

  sendRomanToArabic(romanNumber: Text){
    this.resultService.romanToArabic(romanNumber).subscribe(res => {
      this.dicksonPost_2 = res;
    })
  }
}
