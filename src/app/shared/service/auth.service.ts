import {Injectable} from "@angular/core";
import {LoginUser, RegisteredUser, UserGift} from "../interfaces";
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

  login(loginUser: LoginUser): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/v1/auth/login', loginUser)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', this.TOKEN_SUB_STRING + token)
            this.setToken(this.TOKEN_SUB_STRING + token)
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
    this.setToken(null)
    localStorage.clear()
  }

  signup(user : RegisteredUser): Observable<UserGift> {
    return this.http.post<UserGift>('/api/v1/auth/signup', user)
  }
}
