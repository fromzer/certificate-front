import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './features/login-page/login-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {RegisterPageComponent} from './features/register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import { CertificatesPageComponent } from './features/certificates-page/certificates-page.component';
import { OrdersPageComponent } from './features/orders-page/orders-page.component';
import { UserInfoPageComponent } from './features/user-info-page/user-info-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CertificateInfoPageComponent } from './features/certificates-page/certificate-info-page/certificate-info-page.component';
import { CartPageComponent } from './features/cart-page/cart-page.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    CertificatesPageComponent,
    OrdersPageComponent,
    UserInfoPageComponent,
    LoaderComponent,
    CertificateInfoPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
