import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments:any=[];

  constructor(private paymentService:PaymentService) {
    paymentService.getpayment().subscribe(
      (data:any)=>{this.payments=data},
      (error:any)=>{alert("Internal service error")}
    )
   }

  ngOnInit(): void {
  }

}
