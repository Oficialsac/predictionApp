import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account/login',
    pathMatch: 'full',
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'training',
    loadChildren: () => import('./modules/training/training.module').then((m) => m.TrainingModule),
  },
  {
    path: 'predictions',
    loadChildren: () => import('./modules/predictions/predictions.module').then((m) => m.PredictionsModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin/administrator.module').then((m) => m.AdministratorModule),
  },
  {
    path: 'statistics',
    loadChildren: () => import('./modules/statistics/statistics.module').then((m)=> m.StatisticsModule),
  },
  {
    path: '**',
    redirectTo: 'account/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
