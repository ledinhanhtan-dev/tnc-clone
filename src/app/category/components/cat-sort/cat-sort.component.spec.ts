import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSortComponent } from './cat-sort.component';

describe('CatSortComponent', () => {
  let component: CatSortComponent;
  let fixture: ComponentFixture<CatSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
