import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";


@Component({
  selector: 'app-auth',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  hide = true;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  AuthHandler():void{
    this.authService.authenticate().subscribe(data=>{
      window.localStorage.setItem("accessToken", data.accessToken);
      window.localStorage.setItem("refreshToken", data.refreshToken);
    }, error => {
      console.log(error)
    })
  }
}
