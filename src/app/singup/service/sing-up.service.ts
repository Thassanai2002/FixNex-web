import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingUp } from '../interface/sing-up';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  constructor(private http: HttpClient) { }

  getUser(user_id: SingUp) {
    return this.http.get<SingUp>(`http://localhost:3000/users/${user_id}`);
  }

  saveUser(User:SingUp) {
    return this.http.post<SingUp>('http://localhost:3000/users',User);
  }
}
