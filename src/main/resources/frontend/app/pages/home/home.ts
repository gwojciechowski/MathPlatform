import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultService} from './resultService';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [ResultService]
})
export class HomePage {
  public resultService: ResultService;
  private dicksonChoto: string;
  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.dicksonChoto = '';
    this.resultService = resultService;
    this.resultService.getDick().subscribe(res=>this.dicksonChoto = res);
  }
}
