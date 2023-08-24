import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteRegistrationFormComponent } from './institute-registration-form/institute-registration-form.component';
import { FeaturesPermissionsComponent } from './features-permissions/features-permissions.component';
import { AllInstitutesComponent } from './all-institutes/all-institutes.component';
import { InstituteDetailsComponent } from './institute-details/institute-details.component';

const routes: Routes = [
 {path: "institute-onboarding",component:InstituteRegistrationFormComponent},
 {path:"features-permissions", component:FeaturesPermissionsComponent},
 {path: "all-institutes", component:AllInstitutesComponent},
 {path:"institute-details/:id",component:InstituteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteOnBordingRoutingModule { }
