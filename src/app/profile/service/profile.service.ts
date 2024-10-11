import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Profile } from '../interface/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(user_id: number) {
    return this.http.get<Profile>(`http://localhost:3000/users/${user_id}`);
  }

}
