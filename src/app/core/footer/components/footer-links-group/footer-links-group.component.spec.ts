import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinksGroupComponent } from './footer-links-group.component';

describe('FooterLinksGroupComponent', () => {
  let component: FooterLinksGroupComponent;
  let fixture: ComponentFixture<FooterLinksGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterLinksGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLinksGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
