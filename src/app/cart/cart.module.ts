import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartGuaranteesComponent } from './components/cart-guarantees/cart-guarantees.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './cart.component';

const routes: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  declarations: [
    CartModalComponent,
    CartComponent,
    CartItemComponent,
    CartTotalComponent,
    CartGuaranteesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [CartModalComponent],
})
export class CartModule {}
