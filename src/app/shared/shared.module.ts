import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, BackButtonComponent, NotificationComponent, FooterComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, BackButtonComponent, NotificationComponent, FooterComponent]
})
export class SharedModule {}
