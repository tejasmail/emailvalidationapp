import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

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
    this.apiService.validateDob(this.dob).subscribe((isValid) => {
      this.loading = false;
      this.dobValidationResult = isValid;
      if (isValid) {
        console.log('Date of Birth is valid.');
      } else {
        console.log('Date of Birth is not valid.');
      }
    });
  }
}
