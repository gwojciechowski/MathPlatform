import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class FunctionService {

  http: Http;

  constructor(http: Http) {
    this.http = http;
}