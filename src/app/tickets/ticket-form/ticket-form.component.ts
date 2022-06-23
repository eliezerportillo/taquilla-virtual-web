import { Component, Input, OnInit } from '@angular/core';
import { IAttendee, IOrderTicket } from 'src/app/models/models';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  constructor() {
    this.attendee = {
      firstName: '',
      lastName: '',
      photoUrl: ''
    }
    this.name = '';
  }

  @Input() attendee: IAttendee;

  @Input() name: string;

  ngOnInit(): void {
  }

}
