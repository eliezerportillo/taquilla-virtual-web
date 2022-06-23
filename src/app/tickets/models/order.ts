import { IOrder, IOrderTicket, IAttendee, Event, ICustomer } from "src/app/models/models";


export class Order implements IOrder {
    tickets: IOrderTicket[];
    event: Event;
    eventRef: string;
    customer: ICustomer;
    id: string;

    constructor(order: IOrder) {
        this.tickets = order.tickets;
        this.event = order.event;
        this.eventRef = order.eventRef;
        this.customer = order.customer;
        this.id = order.id;
    }

    get total(): number {
        return this.tickets.reduce((acc, cur) => acc + cur.quantity * Number(cur.ticket?.price), 0);
    }

    // addAttendee() {
    //     this.attendees.push({ firstName: '', lastName: '', photoUrl: '' });
    // }

    // removeAttendee(index: number) {
    //     this.attendees = this.attendees.slice(index, 1);
    // }
}


export class Attendee implements IAttendee {
    constructor(attendee: IAttendee) {
        this.firstName = attendee.firstName;
        this.lastName = attendee.lastName;
        this.photoUrl = attendee.photoUrl;
    }

    photoUrl: string;
    firstName: string;
    lastName: string;
    photoFile?: string | ArrayBuffer | null;
}