import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeedbacksComponent } from './home-feedbacks.component';

describe('HomeFeedbacksComponent', () => {
  let component: HomeFeedbacksComponent;
  let fixture: ComponentFixture<HomeFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
