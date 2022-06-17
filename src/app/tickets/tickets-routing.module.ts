import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { TicketPickerComponent } from './ticket-picker/ticket-picker.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'select', component: TicketPickerComponent },
      { path: 'payment', component: PaymentComponent }
    ]
  },
  // { path: ':eventId', component: TicketPickerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
