import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'any',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * This service makes api call to send mail and returns unique id
   * @returns observable of unique id
   */
  sendEmail(email: string): Observable<string> {
    return this.http.post<string>(BASE_URL + 'send-email', { email }, {
      responseType:'json'
    });
  }

  /**
   * This service makes api call and returns true is age is above 18 else false
   * @param dob date of birth
   * @returns observable of boolean
   */
  validateDob(dob: Date): Observable<boolean> {
    if (!(dob instanceof Date)) {
      dob = new Date(dob);
    }
    return this.http.post<boolean>(BASE_URL + 'validate-dob', { dob });
    ;
  }
}
