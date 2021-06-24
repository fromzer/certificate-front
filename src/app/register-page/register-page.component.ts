import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  aSub!: Subscription;

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      repeatPassword: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    this.form.disable()
    this.aSub = this.auth.signup(this.form.value).subscribe(
      () => {
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true
          }
        })
      },
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }
}
