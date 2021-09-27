import { NgModule } from '@angular/core';
import { components } from './components';
import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent, components],
  imports: [CommonModule, SharedModule],
  exports: [FooterComponent],
})
export class FooterModule {}
