import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-chartjs-polar-area',
  templateUrl: './chartjs-polar-area.component.html'
})
export class ChartJsPolarAreaComponent implements OnDestroy {
  data: any;
  options: any;

  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public footerText: string;
  @Input() public footerIconClass: string;

  @Input() public chartData: any;
  @Input() public chartOptions: any;

  @Input()
  public chartClass: string;
  
  constructor() {}

  ngOnInit(){
    this.data = {
      labels: this.chartData.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: this.chartData.data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(22, 99, 132)',
            'rgb(44, 192, 192)',
            'rgb(77, 205, 86)',
            'rgb(99, 203, 207)',
            'rgb(112, 162, 235)'
          ]
        },
      ],
    };

    this.options = {
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
  }

  ngOnDestroy(): void {}
  
}
