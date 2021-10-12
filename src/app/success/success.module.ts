import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: SuccessComponent }];

@NgModule({
  declarations: [SuccessComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SuccessModule {}
