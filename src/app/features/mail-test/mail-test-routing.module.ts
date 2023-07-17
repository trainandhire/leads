import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailTestComponent } from './mail-test/mail-test.component';

const routes: Routes = [
  {path:'', component: MailTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailTestRoutingModule { }
