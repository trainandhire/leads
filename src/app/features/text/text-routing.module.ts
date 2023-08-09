import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { text } from 'stream/consumers';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  {path:'text', component:TextComponent},
  {path:'', component:TextComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextRoutingModule { }
