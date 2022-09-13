import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';


import { TicketsRoutingModule } from './tickets-routing.module';

import { TicketPickerComponent } from './ticket-picker/ticket-picker.component';
import { WidgetModule } from '../widget/widget.module';
import { HomeComponent } from './home.component';
import { TicketImagePickerComponent } from './ticket-image-picker/ticket-image-picker.component';

import { EndSessionDialogComponent } from './end-session-dialog/end-session-dialog.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketsInfoComponent } from './tickets-info/tickets-info.component';
import { TicketPaymentComponent } from './ticket-payment/ticket-payment.component';
import { PaypalButtonComponent } from './payment-buttons/paypal-button/paypal-button.component';
import { TicketPrintComponent } from './ticket-print/ticket-print.component';
import { ConektaButtonComponent } from './payment-buttons/conekta-button/conekta-button.component';




@NgModule({
  declarations: [
    HomeComponent,
    TicketPickerComponent,
    TicketImagePickerComponent,
    EndSessionDialogComponent,
    TicketFormComponent,
    TicketsInfoComponent,
    TicketPaymentComponent,
    PaypalButtonComponent,
    TicketPrintComponent,
    ConektaButtonComponent
  ],
  entryComponents: [
    EndSessionDialogComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    WidgetModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule

  ]
})
export class TicketsModule { }
