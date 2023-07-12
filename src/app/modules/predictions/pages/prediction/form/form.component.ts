/* eslint-disable */
import { Component, Input } from '@angular/core';
import { ValuesBase } from '../../../../../core/schemas/values/ValuesBase';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  @Input() variable!: ValuesBase<any>;
  @Input() form!: FormGroup;

  get isRequired() {return this.form.controls[this.variable.key].valid;}
}
