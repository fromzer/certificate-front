import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../shared/service/orders.service";
import {Observable} from "rxjs";
import {OrderGetResponse} from "../../shared/interfaces";

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {
  // @ts-ignore
  userId: string = localStorage.getItem('auth-id')
  orders$: Observable<OrderGetResponse> | undefined

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
      this.orders$ = this.orderService.getOrdersByUserId(this.userId)
  }

}
