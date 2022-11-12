import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../models/Account";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account!:Account;
  isAdd:boolean = false;
  isTake:boolean = false;
  sum!:number;


  constructor(private accountService:AccountsService) { }

  ngOnInit(): void {

  }

  onDelete():void{
    this.accountService.deleteAccount(this.account.id).subscribe(()=>{
      window.location.reload()
    })
  }

  onAdd():void{
    this.account.balance += +this.sum;
    this.accountService.changeAccount(this.account.id, this.account.balance).subscribe(()=>{
      window.location.reload()
      this.isAdd = !this.isAdd;
    })
  }

  onTake():void{
    this.account.balance -= +this.sum;
    this.accountService.changeAccount(this.account.id, this.account.balance).subscribe(()=>{
      window.location.reload()
      this.isTake = !this.isTake;
    })
  }



}
