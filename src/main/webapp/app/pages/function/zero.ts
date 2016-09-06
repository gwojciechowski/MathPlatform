import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var algebra: any;
declare var katex: any;

/*
  Generated class for the PrimePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/function/zero.html',
})

export class ZeroPage {
  @ViewChild('result') result: any;
  @ViewChild('latex') latex: any;

  private equations: any;

  constructor(private navCtrl: NavController) {
  }

  showLatex(equations) {
    var expr = new algebra.parse(equations);
    katex.render(algebra.toTex(expr), this.latex.nativeElement);
  }

  showResult(equations) {
    var expr = new algebra.parse(equations);
    var ans = expr.solveFor("x");
    katex.render(algebra.toTex(ans), this.result.nativeElement);
  }
}