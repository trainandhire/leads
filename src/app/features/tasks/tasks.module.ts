import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { NgxPhotoswipeModule } from '@fnxone/ngx-photoswipe';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardModule } from 'src/app/content/partials/general/card/card.module';


@NgModule({
  declarations: [
    CreateTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    CardModule,
    NgxPhotoswipeModule,
    NgxMasonryModule
  ]
})
export class TasksModule { }
