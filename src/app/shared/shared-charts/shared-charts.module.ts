import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { CardModule } from 'src/app/content/partials/general/card/card.module';



@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    CardModule,
  ],
  exports:[
    LineChartComponent
  ]
})
export class SharedChartsModule { }
