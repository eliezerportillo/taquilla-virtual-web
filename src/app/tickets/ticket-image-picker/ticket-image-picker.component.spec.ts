import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketImagePickerComponent } from './ticket-image-picker.component';

describe('TicketImagePickerComponent', () => {
  let component: TicketImagePickerComponent;
  let fixture: ComponentFixture<TicketImagePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketImagePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
