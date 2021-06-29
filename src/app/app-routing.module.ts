import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./features/login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {RegisterPageComponent} from "./features/register-page/register-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {CertificatesPageComponent} from "./features/certificates-page/certificates-page.component";
import {OrdersPageComponent} from "./features/orders-page/orders-page.component";
import {UserInfoPageComponent} from "./features/user-info-page/user-info-page.component";
import {CertificateInfoPageComponent} from "./features/certificates-page/certificate-info-page/certificate-info-page.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'certificates', component: CertificatesPageComponent},
      {path: 'certificates/:id', component: CertificateInfoPageComponent},
      {path: 'orders', component: OrdersPageComponent},
      {path: 'userinfo', component: UserInfoPageComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
