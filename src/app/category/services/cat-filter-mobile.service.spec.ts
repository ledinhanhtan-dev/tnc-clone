import { TestBed } from '@angular/core/testing';

import { CatFilterMobileService } from './cat-filter-mobile.service';

describe('CatFilterMobileService', () => {
  let service: CatFilterMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFilterMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
