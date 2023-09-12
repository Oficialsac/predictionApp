import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { AuthServiceService } from '../../../core/services/authService/auth-service.service';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AdministratorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdministratorRoutingModule,
  ]
})
export class AdministratorModule { }
