import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Data, StatusOperation} from '../user.model';

@Injectable()
export class AuthService {
  private paymentUrl = 'api/payment';
  private successUrl = 'api/success';
  private cancelUrl = 'api/cancel';
  constructor(private http: HttpClient) {}

  getBalance(): Observable<Data> {
    return  this.http.get<Data>(this.paymentUrl);
  }
  pay(): Observable<StatusOperation> {
    return  this.http.get<StatusOperation>(this.successUrl);
  }
  cancel(): Observable<StatusOperation> {
    return  this.http.get<StatusOperation>(this.cancelUrl);
  }
}
