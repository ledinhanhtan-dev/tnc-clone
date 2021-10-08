import { TestBed } from '@angular/core/testing';

import { CatFilterService } from './cat-filter.service';

describe('CatFilterService', () => {
  let service: CatFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
