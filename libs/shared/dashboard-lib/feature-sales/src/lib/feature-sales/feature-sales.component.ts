import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartType } from './sales.model';
import { linewithDataChart, OrderCountChart } from './data';
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'lib-feature-sales',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './feature-sales.component.html',
  styleUrl: './feature-sales.component.scss',
})
export class FeatureSalesComponent implements OnInit{

  linewithDataChart!: ChartType;
  OrderCountChart!: ChartType;
  basicLineChart: any;

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;

    //fetch data
    this.linewithDataChart = linewithDataChart;
    this.OrderCountChart = OrderCountChart;
  }

}
