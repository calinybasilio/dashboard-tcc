import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-chartjs-line',
  templateUrl: './chartjs-line.component.html'
})
export class ChartjsLineComponent implements OnDestroy {
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
  
  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: "Sales",
          data: ['467','576', '572', '79', '92',
               '574', '573', '576'],
          backgroundColor: 'blue'
        },
        {
          label: "Profit",
          data: ['542', '542', '536', '327', '17',
                 '0.00', '538', '541'],
          backgroundColor: 'limegreen'
        }  
      ],
    };

    this.options = this.options = {

      aspectRatio: 2.5

    };
  }

  ngOnDestroy(): void { }

}
