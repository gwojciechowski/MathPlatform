import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class StatisticService {

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  arithmeticAverage(trolo) {

    var params = JSON.stringify({number: trolo});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/arabicToRoman', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

  median(trolo) {

    var params = JSON.stringify({number: trolo});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/arabicToRoman', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

  variance(trolo) {

    var params = JSON.stringify({number: trolo});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/basic/arabicToRoman', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }
}