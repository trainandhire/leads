import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingRoutingModule } from './typing-routing.module';
import { TypingTestComponent } from './typing-test/typing-test.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TypingTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypingRoutingModule
  ]
})
export class TypingModule { }
