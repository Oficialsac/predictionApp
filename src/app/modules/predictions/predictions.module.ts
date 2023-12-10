import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PredictionsRoutingModule } from './predictions-routing.module';
import { PredictionComponent } from './pages/prediction/prediction.component';
import { ResultsComponent } from './pages/results/results.component';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './pages/prediction/form/form.component';


@NgModule({
  declarations: [
    PredictionComponent,
    ResultsComponent,
    FormComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    PredictionsRoutingModule,
  ]
})
export class PredictionsModule { }
