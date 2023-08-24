import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RoleManagementComponent } from './role-management/role-management.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    RoleManagementComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent

    }),
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPagination,
    BreadcrumbModule
  ]
})
export class UsersModule { }
