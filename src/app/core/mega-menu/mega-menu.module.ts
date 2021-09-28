import { NgModule } from '@angular/core';
import { components } from './components';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [components],
  imports: [CommonModule, SharedModule],
  exports: [components],
})
export class MegaMenuModule {}
