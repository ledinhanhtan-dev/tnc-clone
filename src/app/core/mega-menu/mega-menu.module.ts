import { NgModule } from '@angular/core';
import { components } from './components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [components],
  imports: [SharedModule],
  exports: [components],
})
export class MegaMenuModule {}
