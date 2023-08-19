import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteRegistrationFormComponent } from './institute-registration-form/institute-registration-form.component';

const routes: Routes = [
 {path: "institute-onboarding",component:InstituteRegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteOnBordingRoutingModule { }
