import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certificate, OrderGetResponse, OrderPostResponse} from "../interfaces";
import {CartService} from "./cart.service";
import {Router} from "@angular/router";
import {CertificateOrderResponse} from "../model/CertificateOrderResponse";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient,
              private cartService: CartService,
              private router: Router) {
  }

  getOrdersByUserId(id: string): Observable<OrderGetResponse> {
    return this.http.get<OrderGetResponse>(`/api/v1/users/${id}/orders`)
  }

  createOrder(certificates: Certificate[], id: string) {
    this.cartService.clearCart();
    if (certificates.length !== 0) {
      this.http.post<OrderPostResponse>(
        `/api/v1/users/${id}/orders`,
        this.convertToCertificateOrderResponse(certificates)
      ).subscribe();
      this.router.navigate(['/orders'])
    } else {
      this.router.navigate(['/certificates'])
    }
  }

  private convertToCertificateOrderResponse(certificates: Certificate[]): CertificateOrderResponse[] {
    let certOrders: CertificateOrderResponse[] = [];
    for (let certificate of certificates) {
      certOrders.push(new CertificateOrderResponse(certificate.id))
    }
    return certOrders;
  }
}
