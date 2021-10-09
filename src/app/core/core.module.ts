import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '@shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';
import { components } from './components';
@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  providers: [CookieService],
})
export class CoreModule {}
