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
}
