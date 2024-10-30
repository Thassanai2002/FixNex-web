import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rantals } from '../interface/rantals';

@Injectable({
  providedIn: 'root'
})
export class RantalsService {

  constructor(private http: HttpClient) { }

  getRantals(Rantals_id: Rantals) {
    return this.http.get<Rantals>(`http://localhost:3000/TrainerRantals/${Rantals_id}`);
  }

  saveRantals(Rantals:Rantals) {
    return this.http.post<Rantals>('http://localhost:3000/TrainerRantals',Rantals);
  }
}
