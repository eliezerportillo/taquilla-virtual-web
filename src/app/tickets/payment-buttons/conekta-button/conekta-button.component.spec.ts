import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConektaButtonComponent } from './conekta-button.component';

describe('ConektaButtonComponent', () => {
  let component: ConektaButtonComponent;
  let fixture: ComponentFixture<ConektaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConektaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConektaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
