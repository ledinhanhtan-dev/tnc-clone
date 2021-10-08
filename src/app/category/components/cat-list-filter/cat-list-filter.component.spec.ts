import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListFilterComponent } from './cat-list-filter.component';

describe('CatListFilterComponent', () => {
  let component: CatListFilterComponent;
  let fixture: ComponentFixture<CatListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatListFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
