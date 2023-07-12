/* eslint-disable */
export class PredictionsBase {
  predictions: number;
  coef_: Array<number | number[]>;
  intercept: number;

  constructor(options: {
    predictions?: number;
    coef_?: Array<number | number[]>;
    intercept?: number;
  }={}){
    this.coef_ = options.coef_ || [];
    this.predictions = options.predictions || 0;
    this.intercept = options.intercept || 0;
  }
}
