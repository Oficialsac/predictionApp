/* eslint-disable */
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValuesBase } from '../../schemas/values/ValuesBase';

/**
 * Servicio para gestionar la creación de formularios basados en variables.
 */
@Injectable({
  providedIn: 'root',
})
export class ValuesControlService {
  /**
   * Constructor del servicio de control de valores.
   */
  constructor() {}  

  /**
   * Convierte un conjunto de variables en un formulario de Angular.
   * @param variables Lista de variables para crear el formulario.
   * @returns FormGroup que representa el formulario.
   */
  toFormGrop(variables: ValuesBase<any>[]) {
    const group: any = {};

    variables.forEach((variable) => {
      group[variable.key] = variable.required
        ? new FormControl(variable.value || '', [Validators.required])
        : new FormControl(variable.value || '');
    });

    return new FormGroup(group);
  }
}
