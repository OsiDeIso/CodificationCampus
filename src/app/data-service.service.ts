import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataServiceService {

  private apiUrl = 'https://codificationesp.herokuapp.com/';

  constructor( private http: Http) { }

}