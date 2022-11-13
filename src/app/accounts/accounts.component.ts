import { Component, OnInit } from '@angular/core';
import {AccountsService} from "../services/accounts.service";
import {Account} from "../models/Account";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  isCreate:boolean = false;
  accounts!:Account[];

  sum!:number;
  currency:string = "RUB";

  constructor(private accountService:AccountsService) { }

  ngOnInit(): void {
     this.accountService.getList().subscribe(async (data) => {
      this.accounts = data;
    });
  }

  createAccount():void {
      this.accountService.createAccount(this.sum, this.currency).subscribe(()=>{
        this.ngOnInit()
        this.isCreate = !this.isCreate;
      })
  }


}
