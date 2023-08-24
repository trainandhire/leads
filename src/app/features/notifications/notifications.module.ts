import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { CreateNotificationsComponent } from './create-notifications/create-notifications.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateNotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent


    }),
    CardModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NotificationsModule { }
