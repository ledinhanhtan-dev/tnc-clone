import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFilterBlockComponent } from './cat-filter-block.component';

describe('CatFilterBlockComponent', () => {
  let component: CatFilterBlockComponent;
  let fixture: ComponentFixture<CatFilterBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFilterBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFilterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
