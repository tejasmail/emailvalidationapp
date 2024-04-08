import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-dob-validation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dob-validation.component.html',
  styleUrl: './dob-validation.component.scss',
})
export class DobValidationComponent {
  id!: string;
  dob!: Date;
  loading = false;
  dobValidationResult!: boolean;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  validateDob() {
    this.loading = true;
    this.validateDobService(this.dob).subscribe((isValid) => {
      this.loading = false;
      this.dobValidationResult = isValid;
      if (isValid) {
        console.log('Date of Birth is valid.');
      } else {
        console.log('Date of Birth is not valid.');
      }
    });
  }


   /**
   * This service makes api call and returns true is age is above 18 else false
   * @param dob date of birth
   * @returns observable of boolean
   */
   validateDobService(dob: Date): Observable<boolean> {
    if (!(dob instanceof Date)) {
      dob = new Date(dob);
    }
    const today = new Date();
    const age = dob.getFullYear() - today.getFullYear();
    const isOver18 = age >  18;
    return of(isOver18).pipe(delay(500));
  }
}
