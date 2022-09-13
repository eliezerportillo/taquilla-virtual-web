import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.collectAttendeInfo = true;
    this.form = this.createForm();
  }

  get tickets() { return this.form.get('tickets') as FormArray };

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
    this.initTickets(this.order);
    this.form.valueChanges.subscribe(value => {
      if (this.form?.valid) {
        order.customer.firstName = value.firstName;
        order.customer.lastName = value.lastName;
        order.customer.email = value.email;
      }
    });
  }

  goNext() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.sessionService.setSession(this.order);
    this.router.navigateByUrl(`/events/${this.order.event.id}/tickets/payment`);
  }

  private createForm(): FormGroup {
    const usePrincipalInfo = this.fb.control(false);
    usePrincipalInfo.valueChanges.subscribe((value: boolean) => this.usePrincipalInfo(value));

    const customer = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      usePrincipalInfo: usePrincipalInfo
    });

    return this.fb.group({
      customer: customer,
      tickets: this.fb.array([])
    });
  }

  private initTickets(order: IOrder) {
    const tickets = this.tickets;
    for (const t of order.tickets) {
      for (const a of t.attendees) {
        const ticketDetails = this.fb.group(
          {
            firstName: this.fb.control(a.firstName, Validators.required),
            lastName: this.fb.control(a.lastName, Validators.required),
            ticketName: this.fb.control(t.ticket?.name)
          });
        tickets.push(ticketDetails);
      }
    }

  }

  usePrincipalInfo(value: boolean): void {
    throw new Error('Method not implemented.');
  }


}
