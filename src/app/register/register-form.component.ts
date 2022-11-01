import { Component, Input, OnInit } from '@angular/core';
import { RegisterService } from "../services/register.service";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {matchPasswords} from "../validators/matchPasswords";


@Component({
  selector: 'app-register',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  hideFirst = true;
  hideSecond = true;
  @Input() formError = '';
  formGroup: FormGroup = new FormGroup('');

  constructor(private registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('^[\\w\\s]*$')]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern('^[\\w\\s\\d]*$')]),

      repeatPassword: new FormControl('',
        [Validators.required],)
    }, {
      validators: matchPasswords()
    });
  }

  RegisterHandler(): void {
    this.registerService.register(this.formGroup)
      .subscribe(
        {
          next: (response) => {
            console.log(response);
          },
          error: () => {
            console.log("smth wrong")
          },
        })
  }
}
