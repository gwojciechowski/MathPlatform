import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversionPage } from './conversion';
import { PrimePage } from './prime';
import { GcdlcmPage } from './gcdlcm';
import { RelativePage } from './relative';
import { AbsolutePage } from './absolute';
import { InterestPage } from './interest';

/*
  Generated class for the BasicPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/basic/basic.html',
})
export class BasicPage {

  conversionPage = ConversionPage;
  primePage = PrimePage;
  gcdlcmPage = GcdlcmPage;
  relativePage = RelativePage;
  absolutePage = AbsolutePage;
  interestPage = InterestPage;

  constructor(private nav: NavController) {
  }
}
