import { NgModule } from '@angular/core';
import { components } from './components';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header.component';
import { MegaMenuModule } from '@core/mega-menu/mega-menu.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, components],
  imports: [CommonModule, SharedModule, MegaMenuModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
