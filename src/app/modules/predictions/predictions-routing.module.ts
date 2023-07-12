import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionComponent } from './pages/prediction/prediction.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {path: '', component: PredictionComponent},
  {path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionsRoutingModule { }
