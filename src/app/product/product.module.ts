import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { components } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [components, ProductComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule, FormsModule],
})
export class ProductModule {}
