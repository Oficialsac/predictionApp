import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FooterComponent } from './components/footer/footer.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    WebviewDirective,
    BackButtonComponent,
    NotificationComponent,
    FooterComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [CommonModule, TranslateModule, FormsModule, NgApexchartsModule],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    BackButtonComponent,
    NotificationComponent,
    FooterComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
})
export class SharedModule {}
