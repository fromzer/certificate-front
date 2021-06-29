import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserGift} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(id: string): Observable<UserGift> {
    return this.http.get<UserGift>(`/api/v1/users/${id}`)
  }
}
