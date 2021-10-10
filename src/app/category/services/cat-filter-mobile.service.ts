import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CatFilterMobileService {
  active$ = new Subject<boolean>();

  constructor() {}

  openModal() {
    this.active$.next(true);
  }

  closeModal() {
    this.active$.next(false);
  }
}
