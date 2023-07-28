/* eslint-disable */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PredictionsBase } from '../../../../core/schemas/prediction/predictions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() results: PredictionsBase = new PredictionsBase();
  @Output() showResults = new EventEmitter<boolean>();
  
  constructor(private router: Router){}
  
  newPrediction(){
    this.showResults.emit(false);
  }


}
