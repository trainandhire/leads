import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm/crm.component';

const routes: Routes = [
  {path: "crm",component:CrmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
