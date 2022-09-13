import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/core/order.service';
import { IOrder } from 'src/app/models/models';

@Component({
  selector: 'app-order-print',
  templateUrl: './order-print.component.html',
  styleUrls: ['./order-print.component.scss']
})
export class OrderPrintComponent implements OnInit {
  
  orderId: string;
  order?: IOrder;

  constructor(route: ActivatedRoute, private orderService: OrderService) { 
    this.orderId = route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.order = this.orderService.get(this.orderId);
    
  }

}
