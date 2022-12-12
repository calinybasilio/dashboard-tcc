import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-chartjs-polar-area',
  templateUrl: './chartjs-polar-area.component.html'
})
export class ChartJsPolarAreaComponent implements OnDestroy {
  data: any;
  options: any;

  @Input() public title: string;

  @Input() public chartInfo: any;

  constructor() {}

  ngOnInit(){
    this.data = this.chartInfo.data; 
    this.options = this.chartInfo.options;
  }

  ngOnDestroy(): void {}
  
}
