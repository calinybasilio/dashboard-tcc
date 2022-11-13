
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';

import { LbdChartComponent } from './lbd-chart/lbd-chart.component';
import { ChartjsBarComponent } from './chartjs/chartjs-bar/chartjs-bar.component';
import { ChartjsLineComponent } from './chartjs/chartjs-line/chartjs-line.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartModule
  ],
  declarations: [

    LbdChartComponent,
    ChartjsBarComponent,
    ChartjsLineComponent
  ],
  exports: [
    LbdChartComponent,
    ChartjsBarComponent,
    ChartjsLineComponent
  ]
})
export class LbdModule { }
