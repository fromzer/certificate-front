import { Component, OnInit } from '@angular/core';
import {CertificatesService} from "../shared/service/certificates.service";
import {Certificate} from "../shared/interfaces";

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.css']
})
export class CertificatesPageComponent implements OnInit {

  loading = false
  certificates: Certificate[] = []

  constructor(private certificateService: CertificatesService) { }

  ngOnInit() {
    this.loading = true
    this.certificateService.fetch().subscribe(
      certificates => {
        this.loading = false
        // @ts-ignore
        this.certificates = certificates['_embedded']['giftCertificateList']
      }
    )
  }

}
