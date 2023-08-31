import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { AttendInterviewComponent } from './attend-interview/attend-interview.component';

const routes: Routes = [
  {path:"create-interview",component:CreateInterviewComponent},
  {path:"attend-interview/:id",component:AttendInterviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewsRoutingModule { }
