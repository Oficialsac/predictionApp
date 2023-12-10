/* eslint-disable */
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PredictionsBase } from '../../../../core/schemas/prediction/predictions';
import { Router } from '@angular/router';

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
    this.data[this.last_prediction]['0'] = Math.round(this.data[this.last_prediction]['0']);
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
  printResults() {}
}
