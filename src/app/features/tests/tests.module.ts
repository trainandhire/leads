import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { CreateTestComponent } from './create-test/create-test.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CreateTestComponent
  ],
  imports: [
    CommonModule,
    TestsRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent

    }),
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class TestsModule { }
