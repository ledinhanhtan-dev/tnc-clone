import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFilterItemComponent } from './cat-filter-item.component';

describe('CatFilterItemComponent', () => {
  let component: CatFilterItemComponent;
  let fixture: ComponentFixture<CatFilterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFilterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
