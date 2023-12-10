/* eslint-disable */
export class ValuesBase<T> {
    value: T|number;
    key: string;
    required: boolean;
    controlType: string;
    range: number[];
    options: {key: string, value: string}[];

    constructor(options: {
        value?: T;
        key?: string;
        required?: boolean;
        controlType?: string;
        range?: number[];
        options?: {key: string, value: string}[];
    } = {}) {
        this.value = options.value || 0;
        this.key = options.key || '';
        this.required = !!options.required;
        this.controlType = options.controlType || '';
        this.range = options.range || [];
        this.options = options.options || [];
    }
}
