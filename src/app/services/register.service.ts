import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {User} from "../models/User";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const REGISTER_API = 'http://localhost:5042/users/register'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private client: HttpClient) {
  }

  register(formGroup: FormGroup): Observable<any> {
    let user: User = {username: formGroup.value.login, password: formGroup.value.password};
    return this.client.post(REGISTER_API, JSON.stringify(user), httpOptions);
  }
}
