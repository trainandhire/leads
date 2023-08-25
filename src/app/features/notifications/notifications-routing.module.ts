import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotificationsComponent } from './create-notifications/create-notifications.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {path:"create-notifications",component:CreateNotificationsComponent},
  {path:"notification",component:NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
