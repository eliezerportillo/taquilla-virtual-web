import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPrintComponent } from './order-print/order-print.component';

const routes: Routes = [
  { path: ':id/print', component: OrderPrintComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
