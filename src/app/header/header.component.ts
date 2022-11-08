import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  isAuth():boolean{
    let token = localStorage.getItem('accessToken');
    return !!token;

  }
  logout():void{
    localStorage.removeItem('accessToken');
  }
}
