export class Data {
  money: number;
  payment: number;
  constructor() {
    this.money = Math.random();
    this.payment = Math.random();
  }
}
export class StatusOperation {
  message: string;
  code: boolean;
}
