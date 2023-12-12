/* eslint-disable */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { StatisticsService } from '../../../core/services/statistics/statisticsService.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() chart_number: number = 0;
  data_to_chart: Array<any> = []; 
  
  constructor(private http: StatisticsService) {
    this.chartOptions = {
      series: [],
      chart: {
        width: 300,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      title: {
        text: "Inscritos por semestre",
        align: "center",
        margin: 20,
        floating: true
      },
    };
  }


  ngOnInit(): void {
    this.http.getStatistics().subscribe((response) => {
      Object.keys(response).forEach((key) => {
        this.data_to_chart.push(response[key])
      })

      this.chartOptions.series = this.data_to_chart[this.chart_number].values
      this.chartOptions.labels = this.data_to_chart[this.chart_number].index
    })
  }
}
