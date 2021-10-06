import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartComponent } from './cart.component';
import { components } from './components';

const routes: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  declarations: [...components, CartComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [CartModalComponent],
})
export class CartModule {}
