import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { PredictionsBase } from '../../../core/schemas/prediction/predictions';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  labels: string[];
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
  
  constructor() {
    // Configuración inicial del gráfico
    this.chartOptions = {
      series: [
        {
          name: 'Historico',
          data: [],
        },
        {
          name: 'Prediccion',
          data: [],
        }
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
    };
  }

  ngOnInit(): void {
    // Obtiene los datos históricos y de predicción
    this.data = this.results.data_history; 

    // Procesa los datos históricos
    this.data.forEach((d: any) => {
      this.index.push(d.date);
      this.values.push(d.conteo);
    });

    // Procesa los datos de predicción
    this.results_data = this.results.results;

    this.results_data.forEach((d: any) => {
      this.index.push(d['index']);
      this.values.push(d[0]);
    });

    // Formatea las fechas en el formato deseado
    this.index = this.index.map(dateString => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    });
    
    // Configura los datos y categorías para el gráfico
    this.chartOptions.series = [{
      name: 'Historico',
      data: this.values
    }];

    this.chartOptions.xaxis = {
      categories: this.index
    };
  }
}
