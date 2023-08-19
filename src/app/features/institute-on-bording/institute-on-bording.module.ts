import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteOnBordingRoutingModule } from './institute-on-bording-routing.module';
import { InstituteRegistrationFormComponent } from './institute-registration-form/institute-registration-form.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from 'src/app/content/partials/general/match-height/match-height.module';
import { ArchwizardModule } from 'angular-archwizard';
import { FormUtilitiesModule } from 'src/app/shared/form-utilities/form-utilities.module';


@NgModule({
  declarations: [
    InstituteRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    InstituteOnBordingRoutingModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    CardModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    NgbDatepickerModule,
    MatchHeightModule,
    ArchwizardModule,
    FormsModule,
    FormUtilitiesModule
  ]
})
export class InstituteOnBordingModule { }
