import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudetDayLauncherComponent } from './studet-day-launcher/studet-day-launcher.component';

const routes: Routes = [
  {path:'', component: StudetDayLauncherComponent, children:[
      {
        path: 'course', loadChildren: () => import('../../../app/features/course/course.module').then(m => m.CourseModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'typing', loadChildren: () => import('../../../app/features/typing/typing.module').then(m => m.TypingModule)
      },
      {
        path: 'tasks', loadChildren: () => import('../../../app/features/tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'mail-test', loadChildren: () => import('../../../app/features/mail-test/mail-test.module').then(m => m.MailTestModule)
      },
      {
        path: 'text',loadChildren: () => import('../../../app/features/text/text.module').then(m=>m.TextModule),
      },
      {
        path: 'students',loadChildren: () => import('../../../app/features/students/students.module').then(m=>m.StudentsModule),
      },
      {path:'', pathMatch:'full', redirectTo:'typing'}
  ]},
  // {path:'', pathMatch:'full', redirectTo:'student-day-launcher'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDayLauncherRoutingModule { }
