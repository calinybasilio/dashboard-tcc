import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-chartjs-bar',
  templateUrl: './chartjs-bar.component.html'
})
export class ChartjsBarComponent implements OnDestroy {
  data: any;
  options: any;

  @Input() public title: string;

  @Input() public chartInfo: any;

  constructor() {}

  ngOnInit(){
    this.data = this.chartInfo.data; 
    this.options = this.chartInfo.options;
    console.log(this.options)
  }

  ngOnDestroy(): void {}
  
}
