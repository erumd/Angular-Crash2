import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

'../http.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

  myMethod() {
    return console.log('hey whats up');
  }
}
