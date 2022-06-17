import { NgModule } from '@angular/core';


import { CartRoutingModule as TicketsRoutingModule } from './tickets-routing.module';

import { TicketPickerComponent } from './ticket-picker/ticket-picker.component';
import { WidgetModule } from '../widget/widget.module';
import { HomeComponent } from './home.component';
import { TicketImagePickerComponent } from './ticket-image-picker/ticket-image-picker.component';
import { PaymentComponent } from './payment/payment.component';

import { EndSessionDialogComponent } from './end-session-dialog/end-session-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    TicketPickerComponent,
    TicketImagePickerComponent,
    PaymentComponent,
    EndSessionDialogComponent
  ],
  entryComponents: [
    EndSessionDialogComponent
  ],
  imports: [    
    TicketsRoutingModule,
    WidgetModule
  ]
})
export class TicketsModule { }
