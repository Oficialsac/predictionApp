/* eslint-disable */
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValuesBase } from '../../schemas/values/ValuesBase';

@Injectable({
  providedIn: 'root',
})
export class ValuesControlService {
  constructor() {}

  toFormGrop(variables: ValuesBase<any>[]) {
    const group: any = {};

    variables.forEach((variable) => {
      group[variable.key] = variable.required
        ? new FormControl(variable.value || '', [Validators.required])
        : new FormControl(variable.value || '');
    });

    return new FormGroup(group)
  }
}
