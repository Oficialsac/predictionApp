/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
} from 'ng-apexcharts';
import { PredictionsBase } from '../../../core/schemas/prediction/predictions';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: ApexStroke;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @ViewChild('chart', { static: false }) chart?: ChartComponent;
  @Input() results: PredictionsBase = new PredictionsBase();

  public chartOptions: Partial<ChartOptions>;
  data?: any;
  results_data?: any;
  index: Array<any> = [];
  values: Array<any> = [];
  values_results: Array<any> = [];
  index_results: Array<any> = [];

  constructor() {
    // Configuración inicial del gráfico
    this.chartOptions = {
      series: [
        {
          name: 'Historico',
          data: [],
        },
      ],
      chart: {
        height: 280,
        type: 'line',
      },
      title: {
        text: 'Results',
      },
      xaxis: {
        categories: [],
      },
      stroke: {
        curve: 'smooth',
      },
    };
  }

  ngOnInit(): void {
    // Obtiene los datos históricos y de predicción
    this.data = this.results.data_history;
    console.log(this.data);
    // Procesa los datos históricos
    this.data.forEach((d: any) => {
      this.index.push(d.date);
      this.values.push(d.conteo);
    });

    // Procesa los datos de predicción
    this.results_data = this.results.results;

    this.results_data.forEach((d: any) => {
      this.index.push(d['index']);
      this.index_results.push(d['index']);
      this.values.push(d[0]);
      this.values_results.push(d[0]);
    });

    // Formatea las fechas en el formato deseado
    this.index = this.index.map((dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    });

    this.index_results = this.index_results.map((dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    });

    this.chartOptions.series = [
      {
        type: 'line',
        name: 'Histórico',
        data: this.values
      }
    ];
  
    this.chartOptions.xaxis = {
      categories: this.index,
    };
  }
}
