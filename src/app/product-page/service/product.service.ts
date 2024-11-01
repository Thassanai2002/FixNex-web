import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProfile(product_id: number) {
    return this.http.get<Product>(`http://localhost:3000/product/${product_id}`);
  }

}
