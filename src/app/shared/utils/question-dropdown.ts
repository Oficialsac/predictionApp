import { ValuesBase } from '../../core/schemas/values/ValuesBase';

export class DropdownQuestion extends ValuesBase<string> {
  override controlType = 'dropdown';
}