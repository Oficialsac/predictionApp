/* eslint-disable */
import { Component, Input } from '@angular/core';
import { PredictionService } from '../../../../core/services/prediction/prediction.service';
import { ValuesBase } from '../../../../core/schemas/values/ValuesBase';
import { Observable } from 'rxjs';
import { ValuesControlService } from '../../../../core/services/prediction/values-control.service';
import { FormGroup } from '@angular/forms';
import { PredictionsBase } from '../../../../core/schemas/prediction/predictions';
import { Values } from '../../../../core/schemas/values/values';
import Swal from 'sweetalert2';

/**
 * Componente para realizar predicciones basadas en variables de entrada.
 */
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css'],
  providers: [PredictionService, ValuesControlService],
})
export class PredictionComponent {
  /**
   * Formulario reactivo para las variables de entrada.
   */
  form!: FormGroup;

  /**
   * Observable que contiene las variables disponibles para la predicción.
   */
  variables$: Observable<ValuesBase<any>[]>;

  /**
   * Objeto que almacena los valores a predecir.
   */
  valuestoPredict: any = {};

  /**
   * Resultados de la predicción.
   */
  results!: PredictionsBase;

  /**
   * Objeto que almacena los valores para los resultados.
   */
  valuesToResults: any = {};

  /**
   * Indica si se deben mostrar los resultados.
   */
  showResults: boolean = false;

  /**
   * Arreglo que almacena las variables disponibles.
   */
  vars: any = [];

  /**
   * Indica si ha ocurrido un error en la predicción.
   */
  error: boolean = false;

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    // Al suscribirse a las variables, se inicializa el formulario
    this.variables$.subscribe((data) => (this.vars = data));
    console.log(this.vars);
    this.form = this.vcs.toFormGrop(this.vars as ValuesBase<any>[]);
  }

  /**
   * Constructor del componente de predicción.
   * @param predictionsService Servicio para realizar predicciones.
   * @param vcs Servicio para el control de valores y formularios.
   */
  constructor(
    private predictionsService: PredictionService,
    private vcs: ValuesControlService
  ) {
    // Se obtienen las variables para la predicción
    this.variables$ = this.predictionsService.getVariables();
  }

  /**
   * Método para predecir el valor basado en las variables seleccionadas.
   */
  predictValue() {
    // Se obtienen los valores del formulario
    this.valuestoPredict = this.form.getRawValue();
    console.log(this.valuestoPredict);
    
    // Se realiza la llamada al servicio de predicción
    this.predictionsService
      .predictValue(this.valuestoPredict)
      .subscribe((res) => {
        if (res.status) {
          // Se asignan los resultados
          this.results = new PredictionsBase({
            vars: res.vars,
            data_history: res.data,
            results: res.pred_info,
          });
          console.log(this.results);
          this.showResults = true;
        } else {
          // Se muestra una alerta en caso de error
          Swal.fire({
            icon: 'error',
            title: 'No se encuentran datos',
            text: 'Para el programa académico seleccionado no se encontraron los suficientes datos para la predicción',
          });
        }
      });
  }

  /**
   * Método para manejar el cambio en la visualización de resultados.
   * @param event Valor booleano que indica si se deben mostrar los resultados.
   */
  handleShowResultsChange(event: boolean) {
    this.showResults = event;
    // Se reinicializa el formulario al ocultar los resultados
    this.ngOnInit();
  }
}
