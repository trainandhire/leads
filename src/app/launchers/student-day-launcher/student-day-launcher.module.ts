import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDayLauncherRoutingModule } from './student-day-launcher-routing.module';
import { StudetDayLauncherComponent } from './studet-day-launcher/studet-day-launcher.component';


@NgModule({
  declarations: [
    StudetDayLauncherComponent
  ],
  imports: [
    CommonModule,
    StudentDayLauncherRoutingModule
  ]
})
export class StudentDayLauncherModule { }
