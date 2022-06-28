import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { loadScript } from "@paypal/paypal-js";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.scss']
})
export class PaypalButtonComponent implements OnInit {

  paypal: any;
  @ViewChild('paypalButton', { static: true }) private paypalButton?: ElementRef;

  constructor() {
    this.onSuccess = new EventEmitter<any>();
    this.onError = new EventEmitter<any>();
  }

  @Output()
  onSuccess: EventEmitter<any>;

  @Output()
  onError: EventEmitter<any>;

  public didPaypalScriptLoad: boolean = false;
  public loading: boolean = true;

  @Input() paymentAmount: number = 0;

  public paypalConfig: any = {
    // Sets up the transaction when a payment button is clicked
    createOrder: (data: any, actions: any) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: this.paymentAmount // Can also reference a variable or function
          }
        }]
      });
    },
    // Finalize the transaction after payer approval
    onApprove: (data: any, actions: any) => {
      return actions.order.capture().then((orderData: any) => {
        // Successful capture! For dev/demo purposes:
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
        const transaction = orderData.purchase_units[0].payments.captures[0];
        alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
        // When ready to go live, remove the alert and show a success message within this page. For example:
        // const element = document.getElementById('paypal-button-container');
        // element.innerHTML = '<h3>Thank you for your payment!</h3>';
        // Or go to another URL:  actions.redirect('thank_you.html');
        this.onSuccess.emit(orderData);
      });
    },
    onError: (error: any) => {      
      this.onError.emit({message: error.message});
    }
  };

  ngOnInit(): void {

    this.loadPaypalScript();


  }

  async loadPaypalScript() {
    try {
      paypal = await loadScript(environment.paypal);
    } catch (error) {
      console.error("failed to load the PayPal JS SDK script", error);
    }

    if (paypal) {
      try {
        await paypal
          .Buttons(this.paypalConfig)
          .render(this.paypalButton?.nativeElement);

        this.loading = false;
      } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
      }
    }
  }

}
