/* eslint-disable */
import { Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { StatisticsService } from '../../../core/services/statistics/statisticsService.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild("chart", {static:false}) chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() chart_number: number = 0;
  @Input() value: string = '';
  data_to_chart: Array<any> = []; 

  constructor(private http: StatisticsService) {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: []
        }
      ],
      chart: {
        type: "bar",
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: []
      },
      title: {
        text: "Inscritos por Departamento",
        align: "center",
        floating: true
      },
      subtitle: {
        text: "A nivel nacional",
        align: "center"
      },
      
    };
  }

  ngOnInit(): void {

    this.http.getStatistics().subscribe((response) => {
      Object.keys(response).forEach((key) => {
        this.data_to_chart.push(response[key])
      })
      
      if(this.chart_number == 0){
        this.chartOptions.title = {
          text: `Inscritos por Institucion`,
          align: "center",
          floating: true
        }
      }
      
      
      
      this.chartOptions.series = [{
        name: 'Valores',
        data: this.data_to_chart[this.chart_number].values
      }];
  
      this.chartOptions.xaxis = {
        categories: this.data_to_chart[this.chart_number].index
      };
    })
  }
}
