import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor() { }

  @Input()
  ticket?: Ticket;

  ngOnInit(): void {
    
  }

}
