import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  $active = new BehaviorSubject<boolean>(true);

  constructor() {}

  openModal() {
    this.$active.next(true);
  }

  closeModal() {
    this.$active.next(false);
  }
}
