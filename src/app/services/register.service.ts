import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const REGISTER_API = 'http://localhost:5042/users/register'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private client :HttpClient) {}

  register(formGroup:FormGroup):Observable<any>{
    console.log(formGroup.value)
    let login = formGroup.value.login;
    let password = formGroup.value.password;
    return this.client.post(REGISTER_API, {
      login,
      password
    }, httpOptions);
  }
}
