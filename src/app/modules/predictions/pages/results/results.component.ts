/* eslint-disable */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PredictionsBase } from '../../../../core/schemas/prediction/predictions';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  @Input() results: PredictionsBase = new PredictionsBase();
  @Input() values: any = {};
  @Output() showResults = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  newPrediction() {
    this.showResults.emit(false);
  }

  printResults() {
    /**
     * To export pdf results need the follow things:
     * 1) The predictions variables values ( entered by user )
     * 2) The results and errors of model
     * 3) Datos de la ecuación
     **/

    try {
      const doc = new jsPDF();
      const column1Width = 60;
      const column2Width = 60;
      const rowHeight = 10;

      doc.setFontSize(24);
      doc.text('Resultado de Predicción', 10, 15);

      // Encabezado de la tabla
      doc.setFontSize(12);
      doc.text('Columna 1', 10, 20);
      doc.text('Columna 2', 80, 20);

      // Dibujar las filas
      for (let i = 1; i <= 9; i++) {
        const y = 20 + i * rowHeight;
        doc.text('Fila ' + i, 10, y);
        doc.text('Dato ' + i, 80, y);
      }

      // Generar el PDF
      doc.save('tabla.pdf');
    } catch (e) {

    }
  }
}
