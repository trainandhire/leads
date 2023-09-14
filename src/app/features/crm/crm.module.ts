import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRMRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm/crm.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrmComponent
  ],
  imports: [
    CommonModule,
    CRMRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent

    }),
    CardModule,
    FormsModule
  ]
})
export class CRMModule { }
