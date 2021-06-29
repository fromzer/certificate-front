import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderGetResponse, UserGift} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  getOrdersByUserId(id: string): Observable<OrderGetResponse> {
    return this.http.get<OrderGetResponse>(`/api/v1/users/${id}/orders`)
  }
}
