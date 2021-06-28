import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Certificate, CertificateGetResponse} from "../interfaces";
import {Observable} from "rxjs";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<CertificateGetResponse> {
    return this.http.get<CertificateGetResponse>('/api/v1/certificates')
  }

  getCertificateById(id: string): Observable<Certificate> {
    return this.http.get<Certificate>(`/api/v1/certificates/${id}`)
  }
}
