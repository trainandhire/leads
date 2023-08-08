import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as chartsData from "./chartjs";
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnChanges {
  @BlockUI("barCharts") blockUIBarCharts: NgBlockUI;
  @BlockUI("lineCharts") blockUILineCharts: NgBlockUI;


  @Input() public xValues:any = [10,30,20];
  @Input() public cardHeader:string = "";
  @Input() public label:string = "";

  // public breadcrumb: any;
  // showNew: false;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true,
  };

  /**
   * barChart
   */
  // public barChartOptions = chartsData.barChartOptions;
  // public barChartLabels = chartsData.barChartLabels;
  // public barChartType = chartsData.barChartType;
  // public barChartLegend = chartsData.barChartLegend;
  // public barChartData = chartsData.barChartData;
  // public barChartColors = chartsData.barChartColors;

  /**
   * lineChart
   */
  // public lineChartData = chartsData.lineChartData;
  // public lineChartLabels = chartsData.lineChartLabels;
  // public lineChartOptions = chartsData.lineChartOptions;
  // public lineChartColors = chartsData.lineChartColors;
  // public lineChartLegend = chartsData.lineChartLegend;
  // public lineChartType = chartsData.lineChartType;


  /**
   * lineChart
   */
  public lineChartsData = chartsData.lineChartsData;
  public lineChartsLabels = chartsData.lineChartsLabels;
  public lineChartsOptions = chartsData.lineChartsOptions;
  public lineChartsColors = chartsData.lineChartsColors;
  public lineChartsLegend = chartsData.lineChartsLegend;
  public lineChartsType = chartsData.lineChartsType;


  ngOnChanges(changes: SimpleChanges): void {
    this.xValues = this.xValues.filter(value=> value != null && value != Infinity);

    // values
    this.lineChartsData[0].data = this.xValues; // this.xValues;

    // x labels
    this.lineChartsLabels.length=0;;
    for(let i=1; i<=this.xValues.length; i++){
      this.lineChartsLabels.push("Attempt "+i);
    }

    // Total label 
    this.lineChartsData[0].label = this.label;

    this.lineChartsLabels = [...this.lineChartsLabels];
    this.lineChartsData = [...this.lineChartsData];

    console.log("in on changes:",this.xValues);
  }

  /**
   * OnInit
   */
  ngOnInit() {
    // this.lineChartsData[0].data = this.xValues;
  }

  /**
   * Reload card
   */
  // reloadBarCharts() {
  //   this.blockUIBarCharts.start("Loading..");

  //   setTimeout(() => {
  //     this.blockUIBarCharts.stop();
  //   }, 2500);
  // }

  reloadLineCharts() {
    this.blockUILineCharts.start("Loading..");

    setTimeout(() => {
      this.blockUILineCharts.stop();
    }, 2500);
  }

}
