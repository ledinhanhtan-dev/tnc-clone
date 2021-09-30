import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(price: number, ...args: unknown[]): unknown {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
