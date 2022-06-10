import { Component, OnInit } from '@angular/core';
import { DiscountType, Event, EventCategory, EventType, LimitType, TicketChannelOption, TicketDeliveryMethod, TicketType, TicketVisibility } from 'src/app/models';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  constructor() {
    this.event = {
      id: '1',
      address: 'Fray T de motolini 696, Guadalajara',
      date: new Date(),
      capacity: 200,
      coverImage: 'https://i.ytimg.com/vi/mHHdERjISTo/maxresdefault.jpg',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          name: 'Entrada general',
          price: 500,
          startSales: '',
          ticketType: TicketType.Payment,
          visibility: TicketVisibility.Visible
        }]
    }
  }

  ngOnInit(): void {
  }

}
