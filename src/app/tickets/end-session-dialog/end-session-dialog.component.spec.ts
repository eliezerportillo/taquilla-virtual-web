import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSessionDialogComponent } from './end-session-dialog.component';

describe('EndSessionDialogComponent', () => {
  let component: EndSessionDialogComponent;
  let fixture: ComponentFixture<EndSessionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndSessionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndSessionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
