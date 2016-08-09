import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultService } from './resultService';

declare var algebra: any;
declare var katex: any;

/*
  Generated class for the AbsolutePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/basic/absolute.html',
  providers: [ResultService]
})


export class AbsolutePage implements AfterViewInit {
  @ViewChild('dupa') dupa: any;
  public resultService: ResultService;
  private absoluteResult: any;
  private absoluteLatex: any;
  private kokonut: any;
  
  constructor(private navCtrl: NavController, resultService: ResultService) {
    this.resultService = resultService;
    this.absoluteResult = '';

  }

  ngAfterViewInit() {
      // katex.render("c = \\pm\\sqrt{a^2 + b^2}", this.dupa.nativeElement);
  }

  sendAbsoluteError(exactValue: number, relativeError: number){
    this.resultService.absoluteError(exactValue, relativeError).subscribe(res => {
      this.absoluteResult = res;
      console.log(this.absoluteResult);
    })
  }

  kutas(kokonut) {
    var expr = new algebra.parse(kokonut);
    var ans = expr.solveFor("x");
    katex.render(algebra.toTex(ans), this.dupa.nativeElement);
  }
}