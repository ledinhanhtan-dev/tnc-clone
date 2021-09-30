import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
@NgModule({
  declarations: [fromComponents.components],
  imports: [CommonModule, SharedModule, HttpClientModule, RouterModule],
  exports: [
    fromComponents.HeaderComponent,
    fromComponents.FooterComponent,
    fromComponents.PageNotFoundComponent,
  ],
})
export class CoreModule {}
