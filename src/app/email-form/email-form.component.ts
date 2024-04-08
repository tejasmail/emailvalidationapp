import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss',
})
export class EmailFormComponent {
  email: string = '';
  loading: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}

  /**
   * This method is used to send mail and get unique id
   */
  sendEmail() {
    this.loading = true;
    this.sendEmailService(this.email).subscribe((uniqueId) => {
      this.loading = false;
      this.router.navigate(['/validate-dob', uniqueId]);
    });
  }

  /**
   * This service makes api call to send mail and returns unique id
   * @returns observable of unique id
   */
  sendEmailService(_email: string): Observable<string> {
    return of(Math.random().toString(36).substr(2, 9)).pipe(delay(1000));
  }
}
