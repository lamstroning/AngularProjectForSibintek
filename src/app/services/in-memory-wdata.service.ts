import { Injectable } from '@angular/core';
import {Data, StatusOperation} from '../user.model';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  createDb(post: any) {
    const payment = {
        money: this.getRandomNumber(200, 1000),
        payment: this.getRandomNumber(200, 1000)
    };
    const success = {
      code: true,
      message: 'Счет успешно оплачен'
    };
    const cancel = {
      code: false,
      message: 'Счет успешно отменен'
    };
    return {cancel, success, payment};
  }
  constructor() { }
}

