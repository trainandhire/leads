import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailTestComponent } from './mail-test/mail-test.component';
import { MailEvaluationComponent } from './mail-evaluation/mail-evaluation.component';

const routes: Routes = [
  {path:'create-mail', component: MailTestComponent},
  {path:'mail-evaluation',component:MailEvaluationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailTestRoutingModule { }
