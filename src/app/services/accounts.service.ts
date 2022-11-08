import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../models/Account";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}),
};

const AUTHENTICATE_API = 'http://localhost:5042/all'

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private client: HttpClient) { }

  getList():Observable<Account[]>{
    return this.client.get<Account[]>(AUTHENTICATE_API, httpOptions);
  }
}
