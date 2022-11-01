import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {User} from "../models/User";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const AUTHENTICATE_API = 'http://localhost:5042/users/authenticate'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client:HttpClient) { }

  authenticate(formGroup:FormGroup):Observable<any>{
    let user:User = {username:formGroup.value.login, password:formGroup.value.password};
    return this.client.post(AUTHENTICATE_API, JSON.stringify(user),httpOptions);
  }
}
