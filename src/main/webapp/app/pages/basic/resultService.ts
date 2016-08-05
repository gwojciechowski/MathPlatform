import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ResultService {

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

 arabicToRoman(arabicNumber) {

    var params = JSON.stringify({number: arabicNumber});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/arabicToRoman', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

romanToArabic(romanNumber) {

    var params = JSON.stringify({roman: romanNumber});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/romanToArabic', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

primeFactors(primeNumber) {

    var params = JSON.stringify({number: primeNumber});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/primeFactors', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

gcd(aNumber, bNumber) {
    var params = JSON.stringify({a: aNumber, b: bNumber});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/gcd', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

lcm(aNumber, bNumber) {
    var params = JSON.stringify({a: aNumber, b: bNumber});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/lcm', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

relativeError(exact, estimated) {
    var params = JSON.stringify({exactValue: exact, estimatedValue: estimated});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/relativeError', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

absoluteError(exact, relative) {
    var params = JSON.stringify({exactValue: exact, relativeError: relative});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/absoluteError', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

interestCapitalization(initial, interest, amount) {
    var params = JSON.stringify({initialCapital: initial, interestRate: interest, amountOfInterest: amount});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/interestCapitalization', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }
}
