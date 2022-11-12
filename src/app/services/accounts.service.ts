import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../models/Account";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}),
};

const getAccountList = 'http://localhost:5042/all'
const createAccount = 'http://localhost:5042/bankAccounts'

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private client: HttpClient) { }

  getList():Observable<Account[]>{
    return this.client.get<Account[]>(getAccountList, httpOptions);
  }

  createAccount(value:number, currency:string):Observable<Account>{
    return this.client.post<Account>(createAccount, {
      "balance": value,
      "currency": currency
    },httpOptions);
  }

  deleteAccount(guid:string):Observable<Account>{
    return this.client.delete<Account>(createAccount.concat('/', guid), httpOptions);
  }

  changeAccount(guid:string, balance:number):Observable<Account>{
    return this.client.put<Account>(createAccount.concat('/', guid),{
      "balance":balance
    }, httpOptions);
  }
}
