import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Certificate} from "../../../shared/interfaces";
import {CertificatesService} from "../../../shared/service/certificates.service";
import {Observable} from "rxjs";
import {MaterialService} from "../../../shared/classes/material.service";
import {CartService} from "../../../shared/service/cart.service";

@Component({
  selector: 'app-certificate-info-page',
  templateUrl: './certificate-info-page.component.html',
  styleUrls: ['./certificate-info-page.component.css']
})
export class CertificateInfoPageComponent implements OnInit {
  certificate$: Observable<Certificate> | undefined

  constructor(private route: ActivatedRoute,
              private certificateService: CertificatesService,
              private cartService: CartService) {
  }

  // @ts-ignore
  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.certificate$ = this.certificateService.getCertificateById(param['id'])
    })
  }

  addToCart(certificate: Certificate) {
    MaterialService.toast('Certificate added to cart')
    this.cartService.addToCart(certificate);
  }
}
