import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';

@NgModule({
  declarations: [CartModalComponent],
  imports: [CommonModule],
  exports: [CartModalComponent],
})
export class CartModule {}
