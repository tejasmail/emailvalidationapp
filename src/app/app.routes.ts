import { Routes } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { DobValidationComponent } from './dob-validation/dob-validation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/email-form', pathMatch: 'full' },
  { path: 'email-form', component: EmailFormComponent },
  { path: 'validate-dob/:id', component: DobValidationComponent },
];
