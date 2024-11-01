import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderItem, UserSpending } from '../interface/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymaentService {

  constructor(private http: HttpClient) { }

  saveOrder(order:Order) {
    return this.http.post<Order>('http://localhost:3000/order',order);
  }

  saveOrderItem(orderItem:OrderItem) {
    return this.http.post<OrderItem>('http://localhost:3000/orderItem',orderItem);
  }

  saveUserSpending(userSpending:UserSpending) {
    return this.http.post<UserSpending>('http://localhost:3000/userSpending',userSpending);
  }
}
