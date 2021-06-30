import { Component, OnInit } from '@angular/core';
import {CertificatesService} from "../../shared/service/certificates.service";
import {Certificate, CertificateGetResponse} from "../../shared/interfaces";
import {Observable} from "rxjs";
import {CartService} from "../../shared/service/cart.service";

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.css']
})
export class CertificatesPageComponent implements OnInit {

 // loading = false
  certificates$: Observable<CertificateGetResponse> | undefined

  constructor(private certificateService: CertificatesService,
              private cartService: CartService) { }

  ngOnInit() {
  //  this.loading = true
    this.certificates$ = this.certificateService.fetch()
    // this.certificateService.fetch().subscribe(
    //   certificates => {
    //     this.loading = false
    //     // @ts-ignore
    //     this.certificates = certificates['_embedded']['giftCertificateList']
    //   }
  }

  addToCart(certificate: Certificate) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(certificate);
  }
}
