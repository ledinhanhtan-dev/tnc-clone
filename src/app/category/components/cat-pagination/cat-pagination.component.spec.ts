import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPaginationComponent } from './cat-pagination.component';

describe('CatPaginationComponent', () => {
  let component: CatPaginationComponent;
  let fixture: ComponentFixture<CatPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
