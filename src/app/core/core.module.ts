import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';
import { CookieService } from 'ngx-cookie-service';
import { components } from './components';
@NgModule({
  declarations: [components],
  imports: [CommonModule, SharedModule, HttpClientModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    PageNotFoundComponent,
  ],
  providers: [CookieService],
})
export class CoreModule {}
