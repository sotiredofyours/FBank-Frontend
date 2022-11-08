import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-auth',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  hide = true;
  formGroup: FormGroup = new FormGroup('');


  constructor(private authService: AuthService, private router:Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('^[\\w\\s]*$')]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[\\w\\s\\d]*$')])
    })
  }

  AuthHandler(): void {
    this.authService.authenticate(this.formGroup).subscribe(data => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      this.router.navigate(['/accounts']);
    });
  }
}
