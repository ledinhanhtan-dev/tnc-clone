import { NgModule } from '@angular/core';
import { components } from './components';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header.component';
import { MegaMenuModule } from '@core/mega-menu/mega-menu.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, components],
  imports: [CommonModule, SharedModule, MegaMenuModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
