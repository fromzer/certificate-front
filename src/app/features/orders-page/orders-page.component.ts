import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../shared/service/orders.service";
import {Observable} from "rxjs";
import {OrderGetResponse} from "../../shared/interfaces";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {
  // @ts-ignore
  userId: string = localStorage.getItem('auth-id')
  orders$: Observable<OrderGetResponse> | undefined

  constructor(private orderService: OrdersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.orders$ = this.orderService.getOrdersByUserId(this.userId, new HttpParams(param))
    })
  }

  getOrders(page: number) {
    this.orders$ = this.orderService.getOrdersByUserId(this.userId, new HttpParams().set('page', page.toString()))
  }
}
