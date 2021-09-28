import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  activeIndex$ = new BehaviorSubject<number>(0);

  constructor() {}
}
