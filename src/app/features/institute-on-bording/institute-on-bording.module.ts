import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteOnBordingRoutingModule } from './institute-on-bording-routing.module';
import { InstituteRegistrationFormComponent } from './institute-registration-form/institute-registration-form.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from 'src/app/content/partials/general/match-height/match-height.module';
import { ArchwizardModule } from 'angular-archwizard';
import { FormUtilitiesModule } from 'src/app/shared/form-utilities/form-utilities.module';
import { FeaturesPermissionsComponent } from './features-permissions/features-permissions.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllInstitutesComponent } from './all-institutes/all-institutes.component';


@NgModule({
  declarations: [
    InstituteRegistrationFormComponent,
    FeaturesPermissionsComponent,
    AllInstitutesComponent
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
    FormUtilitiesModule,
    NgSelectModule,
    NgbModule,
   
  ]
})
export class InstituteOnBordingModule { }
