import {Injectable} from "@angular/core";
import {AuthData, LoginUser, RegisteredUser, UserGift} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null
  private TOKEN_SUB_STRING = 'Bearer '

  constructor(private http: HttpClient) {
  }

  login(loginUser: LoginUser): Observable<AuthData> {
    return this.http.post<AuthData>('/api/v1/auth/login', loginUser)
      .pipe(
        tap(
          (data) => {
            localStorage.setItem('auth-token', this.TOKEN_SUB_STRING + data.token)
            localStorage.setItem('auth-id', String(data.id))
            this.setToken(this.TOKEN_SUB_STRING + data.token)
          }
        )
      )
  }

  setToken(token: string) {
    // @ts-ignore
    this.token = token
  }

  getToken(): string {
    // @ts-ignore
    return this.token
  }

  isAuthenticated():boolean {
      return !!this.token
  }

  logout() {
    // @ts-ignore
    this.http.post('/api/v1/auth/logout').subscribe()
    // @ts-ignore
    this.setToken(null)
    localStorage.clear()
  }

  signup(user : RegisteredUser): Observable<UserGift> {
    return this.http.post<UserGift>('/api/v1/auth/signup', user)
  }
}
