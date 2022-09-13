import { Component, Input, OnInit } from '@angular/core';
import { IOrderTicket } from 'src/app/models/models';

@Component({
  selector: 'app-order-ticket',
  templateUrl: './order-ticket.component.html',
  styleUrls: ['./order-ticket.component.scss']
})
export class OrderTicketComponent implements OnInit {

  constructor() { }

  @Input() ticket?: IOrderTicket;

  ngOnInit(): void {
  }

}
