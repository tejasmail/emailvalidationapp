import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  /**
   * This service makes api call to send mail and returns unique id
   * @returns observable of unique id
   */
  sendEmail(): Observable<string> {
    return of(Math.random().toString(36).substr(2, 9)).pipe(delay(1000));
  }

  /**
   * This service makes api call and returns true is age is above 18 else false
   * @param dob date of birth
   * @returns observable of boolean
   */
  validateDob(dob: any): Observable<boolean> {
    if (!(dob instanceof Date)) {
      dob = new Date(dob);
    }
    const today = new Date();
    const age = dob.getFullYear() - today.getFullYear();
    const isOver18 = age >  18;
    return of(isOver18).pipe(delay(500));
  }
}
