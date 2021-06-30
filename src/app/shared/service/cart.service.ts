import {Injectable} from '@angular/core';
import {Certificate} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // @ts-ignore
  items = [];

  constructor() {
  }

  addToCart(certificate: Certificate) {
    // @ts-ignore
    this.items.push(certificate);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(certificate: Certificate) {
    this.items.forEach( (item, index) => {
      if(item === certificate) this.items.splice(index,1);
    });
  }

  getCosts(): number {
    let cost: number = 0;
    let certificate: Certificate
    this.items.forEach(
      (element) => {
        certificate = element;
        cost += certificate.price;
      }
    )
    return cost;
  }
}
