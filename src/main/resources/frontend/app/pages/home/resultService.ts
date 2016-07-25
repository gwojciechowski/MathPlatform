import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ResultService {

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getDick() {
    return this.http.get('http://localhost:8080/section/basic/romanToArabic')
      .map(res => res.json());
  }

    getPost() {

    var json=JSON.stringify({input: '1234'});
        var params = json;
        console.log(params);

    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/arabicToRoman', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }
}
