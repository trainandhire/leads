import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CourseIndexComponent } from './course-index/course-index.component';

@NgModule({
  declarations: [
    CreateCourseComponent,
    CourseIndexComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CourseRoutingModule,
    CardModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    DragDropModule

  ]
})
export class CourseModule { }
