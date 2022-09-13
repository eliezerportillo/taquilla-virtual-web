import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderPrintComponent } from './order-print/order-print.component';
import { OrderTicketComponent } from './order-ticket/order-ticket.component';


@NgModule({
  declarations: [
    OrderPrintComponent,
    OrderTicketComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
