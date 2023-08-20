import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpDirective } from './directives/imp.directive';
import { PermissionsDirective } from './directives/permissions.directive';

@NgModule({
  declarations: [
    ImpDirective,
    PermissionsDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PermissionsDirective,
    ImpDirective
  ]
})
export class RolesModule { }
