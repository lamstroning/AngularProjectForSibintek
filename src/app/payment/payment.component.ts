import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  money: number;
  payment: number;
  isLoad = false;
  ngOnInit() {
    this.authService.getBalance().subscribe(res => {
      this.money = res.money;
      this.payment = res.payment;
      console.log(res);
    }, null,  () => {
      this.isLoad = true;
    });
  }
  pay() {
    this.authService.pay().subscribe(res => {
      this.router.navigate(['/success'], {queryParams: {msg: res.message}});
    });
  }
  cancel() {
    this.authService.cancel().subscribe(res => {
      this.router.navigate(['/success'], {queryParams: {msg: res.message}, skipLocationChange: true});
    }); }
}
