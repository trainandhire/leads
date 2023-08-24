import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotificationsComponent } from './create-notifications/create-notifications.component';

const routes: Routes = [
  {path:"create-notifications",component:CreateNotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
