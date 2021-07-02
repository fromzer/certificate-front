import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Certificate, CertificateGetResponse} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private http: HttpClient) {
  }

  fetch(params: HttpParams): Observable<CertificateGetResponse> {
    return this.http.get<CertificateGetResponse>('/api/v1/certificates', {params})
  }

  getCertificateById(id: string): Observable<Certificate> {
    return this.http.get<Certificate>(`/api/v1/certificates/${id}`)
  }
}
