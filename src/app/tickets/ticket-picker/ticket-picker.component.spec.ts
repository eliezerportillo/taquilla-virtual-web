import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPickerComponent } from './ticket-picker.component';

describe('CartDetailsComponent', () => {
  let component: TicketPickerComponent;
  let fixture: ComponentFixture<TicketPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
