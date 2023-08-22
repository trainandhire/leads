import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteRegistrationFormComponent } from './institute-registration-form/institute-registration-form.component';
import { FeaturesPermissionsComponent } from './features-permissions/features-permissions.component';

const routes: Routes = [
 {path: "institute-onboarding",component:InstituteRegistrationFormComponent},
 {path:"features-permissions", component:FeaturesPermissionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteOnBordingRoutingModule { }
