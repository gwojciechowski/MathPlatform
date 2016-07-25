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
    return this.http
      .get('http://localhost:8080/section/basic/romanToArabic')
      .map(res => res.json());
  }
}
