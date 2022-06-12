import { Component, OnInit } from '@angular/core';
import { DiscountType, Event, EventCategory, EventType, LimitType, Order, OrderItem, TicketChannelOption, TicketDeliveryMethod, TicketType, TicketVisibility } from 'src/app/models';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  order: Order;
  event: Event;
  constructor() {
    this.event = {
      id: '1',
      address: 'Fray T de motolini 696, Guadalajara',
      date: new Date(),
      capacity: 200,
      coverImage: 'https://i.ytimg.com/vi/mHHdERjISTo/maxresdefault.jpg',
      description: `<strong>Conquistando Fronteras</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      eventCategory: EventCategory.Musica,
      eventType: EventType.Conciertooactuación,
      eventMessage: 'Cupo limitado',
      name: 'Conquistando Fronteras Tour México',
      place: 'Auditorio TELMEX',
      promoCodes: [
        {
          discountType: DiscountType.Percent,
          limitType: LimitType.Unlimited,
          limitedNumber: 0,
          name: 'BennyLoco10',
          validity: {
            startDate: new Date(),
            endDate: new Date(2023, 1, 1)
          }
        }
      ],
      state: '',
      tickets: [
        {
          availableQuantity: 100,
          channel: TicketChannelOption.Place,
          deliveryMethod: TicketDeliveryMethod.ETicket,
          description: 'Entrada general',
          maximumQuantity: 100,
          minimumQuantity: 100,
          name: 'Entrada general',
          price: 100,
          startSales: '',
          ticketType: TicketType.Payment,
          visibility: TicketVisibility.Visible
        },
        {
          availableQuantity: 100,
          channel: TicketChannelOption.Place,
          deliveryMethod: TicketDeliveryMethod.ETicket,
          description: 'Entrada VIP',
          maximumQuantity: 100,
          minimumQuantity: 100,
          name: 'Entrada VIP',
          price: 500,
          startSales: '',
          ticketType: TicketType.Payment,
          visibility: TicketVisibility.Visible
        }],
      ticketLimitPerOrder: 10
    }

    this.order = {
      event: this.event,
      eventRef: '',
      attendees: [],
      id: '1',
      tickets: this.event.tickets.map(x => {
        return {
          ticket: x,
          ticketRef: '1',
          quantity: 0
        }
      })
    }
  }

  get hasLimit(): boolean {
    return this.event.ticketLimitPerOrder ? true : false;
  }

  reduce(ticket: OrderItem) {
    ticket.quantity--;
  }

  increment(ticket: OrderItem) {
    ticket.quantity++;
  }

  canAdd(): boolean {

    if (this.event.ticketLimitPerOrder) {
      return true;
    }

    const addedItems = this.order.tickets.map(x => x.quantity).reduce((acc, cur) => acc + cur, 0)
    return addedItems == this.event.ticketLimitPerOrder;
  }

  ngOnInit(): void {
  }

}
