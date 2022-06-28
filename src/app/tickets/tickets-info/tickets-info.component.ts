import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private fb: FormBuilder,
    private router: Router) {
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

    this.form.patchValue(this.order.customer);
    this.form.valueChanges.subscribe(value => {
      if (this.form.valid) {
        order.customer.firstName = value.firstName;
        order.customer.lastName = value.lastName;
        order.customer.email = value.email;
      }
    });
  }

  goNext() {
    this.sessionService.setSession(this.order);
    this.router.navigateByUrl(`/events/${this.order.event.id}/tickets/payment`);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required),
      email: this.fb.control(null, Validators.required),
      privacy: this.fb.control(false, Validators.requiredTrue)
    });
  }


}
