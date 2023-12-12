/* eslint-disable */
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PredictionsBase } from '../../../../core/schemas/prediction/predictions';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

/**
 * Componente para mostrar los resultados de predicciones.
 */
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  // Propiedades de entrada
  @Input() results: PredictionsBase = new PredictionsBase();
  @Input() values: any = {};

  // Evento de salida para controlar la visualización de resultados
  @Output() showResults = new EventEmitter<boolean>();
  showReport: boolean = false;

  // Datos de resultados
  data?: any;
  last_prediction?: any;

  /**
   * Constructor del componente de resultados.
   * @param router Servicio de enrutamiento de Angular.
   */
  constructor(private router: Router) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    // Se asignan los resultados y se redondea la última predicción
    this.data = this.results.results;
    this.last_prediction = this.data.length - 1;
    this.data[this.last_prediction]['0'] = Math.round(
      this.data[this.last_prediction]['0']
    );

    console.log(this.data);
  }

  /**
   * Método para iniciar una nueva predicción.
   */
  newPrediction() {
    // Se emite el evento para ocultar los resultados
    this.showResults.emit(false);
  }

  /**
   * Método para imprimir resultados (por implementar).
   */
  printResults(): void {
    this.showReport = true;
    if (this.showReport) {
      const data = document.getElementById('report_prediction');
      if (data) {
        html2canvas(data, { scale: 2, logging: true }).then((canvas) => {
          if (canvas) {
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = (canvas.height * imgWidth) / canvas.width;
            var heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf('p', 'mm', 'a4');
            pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('report_prediction.pdf');
          }
        });
      }
      this.showReport = false;
    }
    console.log(this.showReport);
  }
}
