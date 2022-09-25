import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const REGISTER_API = 'http://localhost:5042/users/register'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private client :HttpClient) {}

  register(username:string, password:string):Observable<any>{
    return this.client.post(REGISTER_API, {
      username,
      password
    }, httpOptions);
  }
}
