import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Certificate} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>('/api/v1/certificates')
  }
}
