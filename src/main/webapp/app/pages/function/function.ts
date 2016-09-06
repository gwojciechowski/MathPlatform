import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ZeroPage } from './zero';

/*
  Generated class for the FunctionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/function/function.html',
})
export class FunctionPage {

  zeroPage = ZeroPage;

  constructor(private nav: NavController) {

  }

}
