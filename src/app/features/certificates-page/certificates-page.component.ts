import {Component, OnInit} from '@angular/core';
import {CertificatesService} from "../../shared/service/certificates.service";
import {Certificate, CertificateGetResponse} from "../../shared/interfaces";
import {Observable} from "rxjs";
import {CartService} from "../../shared/service/cart.service";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MaterialService} from "../../shared/classes/material.service";

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.css']
})
export class CertificatesPageComponent implements OnInit {
  certificates$: Observable<CertificateGetResponse> | undefined

  constructor(private certificateService: CertificatesService,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.certificates$ = this.certificateService.fetch(new HttpParams(param))
    })
  }

  getCertificates(page: number) {
    this.certificates$ = this.certificateService.fetch(new HttpParams().set('page', page.toString()))
  }

  addToCart(certificate: Certificate) {
    MaterialService.toast('Certificate added to cart')
    this.cartService.addToCart(certificate);
  }
}
