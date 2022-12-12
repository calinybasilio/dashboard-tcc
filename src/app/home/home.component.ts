import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { DashboardService } from 'app/core/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public activityChartType: ChartType;
  public activityChartData: any;
  public activityChartOptions: any;
  public activityChartResponsive: any[];
  public activityChartLegendItems: LegendItem[];
  

  public wordFrequencyPolarAreaConfig: any;
  public numberJournalistsByLocationBarConfig: any;

  constructor(
    private _dashBoardService: DashboardService
  ) {}

  ngOnInit() {
    this.activityChartType = ChartType.Bar;
    this.activityChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
      ]
    };
    this.activityChartOptions = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: '245px'
    };
    this.activityChartResponsive = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.activityChartLegendItems = [
      { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
      { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
    ];

    this.wordFrequencyPolarAreaConfig = {
      data: this._dashBoardService.wordFrequencyPolarArea(),
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 18
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false
          }
        }
      }
    };

    this.numberJournalistsByLocationBarConfig = {
      data: this._dashBoardService.numberJournalistsByLocationBar(),
      options: {
        responsive: true,
        beginAtZero: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          beginAtZero: true,
          y: {
            beginAtZero: true,
            min: 0,
            max: 50
          }
        }
      }
    };

  }

}
