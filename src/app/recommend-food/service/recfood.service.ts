import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Refood } from '../interface/refood';

@Injectable({
  providedIn: 'root',
})
export class RecfoodService {
  constructor(private http: HttpClient) {}

  getRecommendFood() {
    return this.http.get<Refood>('http://localhost:3000/product');
  }
}
