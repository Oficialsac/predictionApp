/* eslint-disable */

/**
 * Clase que representa un conjunto de valores.
 */
export class Values {
    /**
     * Datos.
     */
    datos: string;
  
    /**
     * Año asociado a los valores.
     */
    año: string;
  
    /**
     * Semestre asociado a los valores.
     */
    semestre: string;
  
    /**
     * Programa asociado a los valores.
     */
    programa: string;
  
    /**
     * Constructor de la clase Values.
     * @param datos Datos asociados a los valores.
     * @param año Año asociado a los valores.
     * @param semestre Semestre asociado a los valores.
     * @param programa Programa asociado a los valores.
     */
    constructor(datos: string, año: string, semestre: string, programa: string) {
      /**
       * Datos asociados a los valores.
       */
      this.datos = datos;
  
      /**
       * Año asociado a los valores.
       */
      this.año = año;
  
      /**
       * Semestre asociado a los valores.
       */
      this.semestre = semestre;
  
      /**
       * Programa asociado a los valores.
       */
      this.programa = programa;
    }
  }
  

