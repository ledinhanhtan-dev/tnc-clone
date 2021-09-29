import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, HeaderModule, HttpClientModule, FooterModule],
  exports: [HeaderModule, FooterComponent],
  declarations: [PageNotFoundComponent],
})
export class CoreModule {}
