import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestViewComponent } from './test-view/test-view.component';

const routes: Routes = [
  {path: "create-tests",component:CreateTestComponent},
  {path:"tests-view/:id",component:TestViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
