import { Injectable } from '@angular/core';
import { Signin } from '../interface/signin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  chackUser(user_id: string) {
    return this.http.get<Signin>(`http://localhost:3000/users/username/${user_id}`);
  }
}
