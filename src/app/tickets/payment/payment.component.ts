import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/core/session.service';
import { EventCategory, EventType, DiscountType, LimitType, TicketChannelOption, TicketDeliveryMethod, TicketType, TicketVisibility, IOrder } from 'src/app/models/models';
import { Order } from '../models/order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  loaded: boolean;
  order: Order;
  constructor(private sessionService: SessionService) {
    this.loaded = false;
    this.order = {} as Order;
  }

  ngOnInit(): void {
    const order: IOrder = this.sessionService.getSession();
    this.order = new Order(order);
    this.loaded = true;
  }

}
