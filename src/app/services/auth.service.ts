import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const AUTHENTICATE_API = 'http://localhost:5042/users/authenticate'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client:HttpClient) { }

  authenticate():Observable<any>{
    return this.client.get(AUTHENTICATE_API, httpOptions)
  }
}
