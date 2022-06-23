import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from 'src/app/core/session.service';
import { IOrder, IAttendee } from 'src/app/models/models';
import { Order } from '../models/order';

@Component({
  selector: 'app-tickets-info',
  templateUrl: './tickets-info.component.html',
  styleUrls: ['./tickets-info.component.scss']
})
export class TicketsInfoComponent implements OnInit {

  loaded: boolean;
  order: Order;
  collectAttendeInfo: boolean;
  form: FormGroup;
  constructor(
    private sessionService: SessionService,
    private fb: FormBuilder) {
    this.loaded = false;
    this.order = {} as Order;
    this.collectAttendeInfo = false;
    this.form = this.createForm();
  }

  ngOnInit(): void {
    const order: IOrder = this.sessionService.getSession();
    this.order = new Order(order);
    for (const t of this.order.tickets) {
      for (let i = 0; i < t.quantity; i++) {
        const atteendee: IAttendee = {
          firstName: '',
          lastName: '',
          photoUrl: ''
        }
        t.attendees.push(atteendee);
      }
    }
    this.loaded = true;
  }


  private createForm(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required),
      email: this.fb.control(null, Validators.required),
      privacy: this.fb.control(false, Validators.required)
    });
  }


}
