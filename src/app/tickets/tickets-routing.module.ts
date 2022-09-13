import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketPickerComponent } from './ticket-picker/ticket-picker.component';
import { HomeComponent } from './home.component';
import { TicketsInfoComponent } from './tickets-info/tickets-info.component';
import { TicketPaymentComponent } from './ticket-payment/ticket-payment.component';
import { TicketPrintComponent } from './ticket-print/ticket-print.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'select', component: TicketPickerComponent },
      { path: 'info', component: TicketsInfoComponent },
      { path: 'payment', component: TicketPaymentComponent }      
    ]
  },
  // { path: ':eventId', component: TicketPickerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
