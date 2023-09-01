import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewsRoutingModule } from './interviews-routing.module';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendInterviewComponent } from './attend-interview/attend-interview.component';


@NgModule({
  declarations: [
    CreateInterviewComponent,
    AttendInterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewsRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent

    }),
    CardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class InterviewsModule { }
