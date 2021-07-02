import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserGift} from "../../shared/interfaces";
import {UserService} from "../../shared/service/user.service";

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  // @ts-ignore
  userId: string = localStorage.getItem('auth-id')
  user$: Observable<UserGift> | undefined

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUserById(this.userId)
  }

}
