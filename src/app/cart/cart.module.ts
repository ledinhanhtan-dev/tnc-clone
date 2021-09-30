import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartComponent } from './cart.component';
import { CartService } from '@core/services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { SharedModule } from '@shared/shared.module';
import { CartGuaranteesComponent } from './components/cart-guarantees/cart-guarantees.component';
import { RouterModule, Routes } from '@angular/router';

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
  providers: [CartService],
})
export class CartModule {}
