import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './pages/training/training.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
