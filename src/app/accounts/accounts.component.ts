import { Component, OnInit } from '@angular/core';
import {AccountsService} from "../services/accounts.service";
import {Account} from "../models/Account";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts:Account[] = [];

  constructor(private accountService:AccountsService) { }

  ngOnInit(): void {
    this.accountService.getList().subscribe((data) => {
      this.accounts = data;
    });
  }

}
