import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDescriptionComponent } from './cat-description.component';

describe('CatDescriptionComponent', () => {
  let component: CatDescriptionComponent;
  let fixture: ComponentFixture<CatDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
