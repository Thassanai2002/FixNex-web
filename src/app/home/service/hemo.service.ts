import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MyInterface } from '../interface/my-interface';
import { Sendmodle } from '../interface/send';

@Injectable({
  providedIn: 'root'
})
export class HemoService {

  constructor(private http: HttpClient) { }

  testapi() {
    return this.http.get<MyInterface>('http://localhost:3000/holow');
  }
  testsend(modle:Sendmodle) {
    return this.http.post<MyInterface>('http://localhost:3000/holow/holow2',modle);
  }
}
