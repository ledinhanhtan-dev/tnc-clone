import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsService } from '@core/services/products.service';
import { ProductInfoService } from './services/product-info.service';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { components } from './components';

@NgModule({
  declarations: [...components, ProductComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
  providers: [ProductsService, ProductInfoService],
})
export class ProductModule {}
