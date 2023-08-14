import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { TaskEvaluationComponent } from './task-evaluation/task-evaluation.component';

const routes: Routes = [
  {path:'', component: ViewTaskComponent},
  {path:'create-task', component: CreateTaskComponent},
  {path:'task-evaluation',component:TaskEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
