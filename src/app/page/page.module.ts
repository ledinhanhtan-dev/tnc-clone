import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildPcComponent } from './components/build-pc/build-pc.component';
import { SharedModule } from '@shared/shared.module';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [BuildPcComponent],
  imports: [CommonModule, SharedModule, PageRoutingModule],
})
export class PageModule {}
