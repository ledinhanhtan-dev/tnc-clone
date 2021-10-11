import { TestBed } from '@angular/core/testing';

import { StoreResolver } from './store.resolver';

describe('StoreResolver', () => {
  let resolver: StoreResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StoreResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
