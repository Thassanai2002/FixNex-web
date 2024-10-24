import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MyInterface } from '../interface/my-interface';
import { Sendmodle } from '../interface/send';
import { Save } from '../interface/save';
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


  save(User:Save) {
    return this.http.post<Save>('http://localhost:3000/users',User);
  }
}
