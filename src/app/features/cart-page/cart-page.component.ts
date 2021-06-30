import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shared/service/cart.service";
import {Certificate, CertificateOrder, OrderPostResponse} from "../../shared/interfaces";
import {Router} from "@angular/router";
import {OrdersService} from "../../shared/service/orders.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  items: Certificate[];
  userId = localStorage.getItem('auth-id')

  constructor(private cartService: CartService,
              private router: Router,
              private orderService: OrdersService) {
    this.items = cartService.getItems();
  }

  ngOnInit(): void {
  }

  getSum(): number {
    // @ts-ignore
    return this.cartService.getCosts();
  }

  removeItem(certificate: Certificate) {
    this.cartService.removeItem(certificate);
  }

  clearCart() {
    this.cartService.clearCart()
    this.router.navigate(['/certificates']);
  }

  createOrder(certificates: CertificateOrder[]) {
    // @ts-ignore
    this.orderService.createOrder(certificates, this.userId);
  }
}
