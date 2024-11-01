import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderItem, UserSpending, User } from '../interface/payment';

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

  getUserSpending(user_id: number) {
    return this.http.get<UserSpending>(`http://localhost:3000/userSpending/${user_id}`);
  }

  postUserSpending(userSpending:UserSpending) {
    return this.http.post<UserSpending>('http://localhost:3000/userSpending',userSpending);
  }

  patchUserSpending(spending_id: number, data: UserSpending) {
    return this.http.patch<UserSpending>(`http://localhost:3000/userSpending/${spending_id}`, data);
  }

  patchUserVip(user_id: number, user: User) {
    return this.http.patch<User>(`http://localhost:3000/users/${user_id}`, user);
  }

  getUser(user_id: number) {
    return this.http.get<User>(`http://localhost:3000/users/userid/${user_id}`);
  }
}

