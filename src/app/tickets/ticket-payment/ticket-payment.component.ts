import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/session.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-ticket-payment',
  templateUrl: './ticket-payment.component.html',
  styleUrls: ['./ticket-payment.component.scss']
})
export class TicketPaymentComponent implements OnInit {

  order: Order;
  constructor(private sessionService: SessionService, private router: Router) {
    this.order = {} as Order;
  }


  ngOnInit(): void {
    this.order = new Order(this.sessionService.getSession());
  }


  public onSuccess(data: any) {
    console.log(data);
    this.order.orderResponse = data;
    this.sessionService.setSession(this.order);
    this.router.navigateByUrl(`/orders/1/print`);
  }

  public onError(data: any) {
    console.log(data);
    this.router.navigateByUrl(`/oops`, { state: data });
  }

}
