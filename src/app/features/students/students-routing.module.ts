import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:"student-registration",component:StudentRegistrationComponent},
  {path:"student-details",component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
