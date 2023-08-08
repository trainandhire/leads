import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingRoutingModule } from './typing-routing.module';
import { TypingTestComponent } from './typing-test/typing-test.component';
import { FormsModule } from '@angular/forms';
import { SharedChartsModule } from 'src/app/shared/shared-charts/shared-charts.module';


@NgModule({
  declarations: [
    TypingTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypingRoutingModule,
    SharedChartsModule
  ]
})
export class TypingModule { }
