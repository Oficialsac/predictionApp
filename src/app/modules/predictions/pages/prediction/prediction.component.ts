/* eslint-disable */
import { Component, Input } from '@angular/core';
import { PredictionService } from '../../../../core/services/prediction/prediction.service';
import { ValuesBase } from '../../../../core/schemas/values/ValuesBase';
import { Observable } from 'rxjs';
import { ValuesControlService } from '../../../../core/services/prediction/values-control.service';
import { FormGroup } from '@angular/forms';
import { PredictionsBase } from '../../../../core/schemas/prediction/predictions';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css'],
  providers: [PredictionService, ValuesControlService],
})
export class PredictionComponent {
  form!: FormGroup;
  variables$: Observable<ValuesBase<any>[]>;
  valuestoPredict: any = {};
  results!: PredictionsBase
  showResults: boolean = false;
  vars: any = [];
  error: boolean = false;

  ngOnInit(): void {
    this.variables$.subscribe((data) => (this.vars = data));
    this.form = this.vcs.toFormGrop(this.vars as ValuesBase<any>[]);
  }

  constructor(
    private predictionsService: PredictionService,
    private vcs: ValuesControlService
  ) {
    this.variables$ = this.predictionsService.getVariables();
  }

  predictValue() {
    this.valuestoPredict = this.form.getRawValue();
    
    Object.keys(this.valuestoPredict).forEach(key => {
      if(this.valuestoPredict[key] != ''){
        this.predictionsService
          .predictValue(this.valuestoPredict)
          .subscribe((data) => {
            if( data !== undefined ){
              console.log(data);
              
              this.results = new PredictionsBase({
                coef_: data.coef_,
                intercept: data.intercept,
                predictions: data.predictions
              })


              this.showResults = true;
            }
          });
      }else{
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000)
      }
    })
  }

  handleShowResultsChange(event: boolean){
    this.showResults = event;   
    this.ngOnInit()
  }

}
