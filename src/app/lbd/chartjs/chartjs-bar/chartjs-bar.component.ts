import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-chartjs-bar',
  templateUrl: './chartjs-bar.component.html'
})
export class ChartjsBarComponent implements OnDestroy {
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
      labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
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
        ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,

        aspectRatio:2.5
      
    };
  }

  ngOnDestroy(): void {}
  
}
