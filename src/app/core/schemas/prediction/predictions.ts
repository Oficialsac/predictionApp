/* eslint-disable */

/**
 * Clase que representa un conjunto de predicciones.
 */
export class PredictionsBase {
  /**
   * Variables utilizadas en el modelo de predicción.
   */
  vars: Array<{}>;

  /**
   * Datos históricos utilizados para entrenar el modelo.
   */
  data_history: Array<{}>;

  /**
   * Resultados de las predicciones.
   */
  results: Array<{}>;

  /**
   * Constructor de la clase PredictionsBase.
   * @param options Opciones para inicializar la instancia.
   */
  constructor(options: {
    vars?: Array<{}>;
    data_history?: Array<{}>;
    results?: Array<{}>;
  } = {}) {
    /**
     * Datos históricos utilizados para entrenar el modelo.
     */
    this.data_history = options.data_history || [];

    /**
     * Variables utilizadas en el modelo de predicción.
     */
    this.vars = options.vars || [];

    /**
     * Resultados de las predicciones.
     */
    this.results = options.results || [];
  }
}
