import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingRoutingModule } from './typing-routing.module';
import { TypingTestComponent } from './typing-test/typing-test.component';
import { FormsModule } from '@angular/forms';
import { SharedChartsModule } from 'src/app/shared/shared-charts/shared-charts.module';
import { TypingTrainerSummeryComponent } from './typing-trainer-summery/typing-trainer-summery.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TypingTestComponent,
    TypingTrainerSummeryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypingRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    CardModule,
    SharedChartsModule,
    NgSelectModule,
    NgbPagination
  ]
})
export class TypingModule { }
