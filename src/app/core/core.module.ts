import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MegaMenuModule } from './mega-menu/mega-menu.module';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [CommonModule, HeaderModule, HttpClientModule, FooterModule],
  exports: [HeaderModule, FooterComponent],
})
export class CoreModule {}
