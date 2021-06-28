import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Certificate} from "../../../shared/interfaces";
import {CertificatesService} from "../../../shared/service/certificates.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-certificate-info-page',
  templateUrl: './certificate-info-page.component.html',
  styleUrls: ['./certificate-info-page.component.css']
})
export class CertificateInfoPageComponent implements OnInit {
  certificate$: Observable<Certificate> | undefined

  constructor(private route: ActivatedRoute,
    private certificateService: CertificatesService) { }

  // @ts-ignore
  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.certificate$ = this.certificateService.getCertificateById(param['id'])
    })
  }
}
