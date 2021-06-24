import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  links = [
    {url: '/certificates', name: 'Overview'},
    {url: '/orders', name: 'Orders'},
    {url: '/userinfo', name: 'User info'}
  ]

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }
}
