/* eslint-disable */
export class ValuesBase<T> {
    value: T|number;
    key: string;
    required: boolean;
    controlType: string;
    range: number[];

    constructor(options: {
        value?: T;
        key?: string;
        required?: boolean;
        controlType?: string;
        range?: number[];
    } = {}) {
        this.value = options.value || 0;
        this.key = options.key || '';
        this.required = !!options.required;
        this.controlType = options.controlType || '';
        this.range = options.range || [];
    }
}
