import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailTestRoutingModule } from './mail-test-routing.module';
import { MailTestComponent } from './mail-test/mail-test.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MailTestComponent
  ],
  imports: [
    CommonModule,
    MailTestRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    CardModule,
    ReactiveFormsModule
  ]
})
export class MailTestModule { }
