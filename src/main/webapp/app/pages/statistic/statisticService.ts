import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class StatisticService {

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  arithmeticAverage(numbers) {

    var params = JSON.stringify({numbers: numbers});
    console.log(params);
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/statistic/arithmeticAverage', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

  median(numbers) {

    var params = JSON.stringify({numbers: numbers});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/statistic/median', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }

  variance(numbers) {

    var params = JSON.stringify({numbers: numbers});
    var headers = new  Headers();
                    headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:8080/section/statistic/varianceAndDeviation', params,{
                                        headers: headers
                                    })
        .map(res => res.json());
    }
}