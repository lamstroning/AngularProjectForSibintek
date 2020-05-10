import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  msg: string;

  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute){

    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.msg = queryParam.msg;
      }
    );
  }
  ngOnInit() {

  }

}
