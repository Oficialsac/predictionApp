import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, BackButtonComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, BackButtonComponent]
})
export class SharedModule {}
