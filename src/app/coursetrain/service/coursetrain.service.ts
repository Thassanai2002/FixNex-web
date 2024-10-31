import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coursetrain,programsEnrollments } from '../interface/coursetrain';
@Injectable({
  providedIn: 'root'
})
export class CoursetrainService {

  constructor(private http: HttpClient) {}

  getProgram(program_id: number) {
    return this.http.get<Coursetrain>(`http://localhost:3000/TrainingProgram/${program_id}`);
  }

  saveProgramToEnrollment(programsEnrollments:programsEnrollments) {
    return this.http.post<programsEnrollments>('http://localhost:3000/programsEnrollments',programsEnrollments);
  }
}
