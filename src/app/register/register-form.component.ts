import {Component, Input, OnInit} from '@angular/core';
import { RegisterService} from "../shared/register.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  hideFirst = true;
  hideSecond = true;

  formGroup:FormGroup = new FormGroup('');

  @Input() formError = '';

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.pattern('^[\\w\\s]*$')]),
      password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(20), Validators.pattern('^[\\w\\s\\d]*$')]),
      repeatPassword: new FormControl('', [Validators.required], )
    });
  }

  RegisterHandler():void{

     this.registerService.register(this.formGroup.value, this.formGroup.value('register')).subscribe(
      {next: () => {
          console.log("Вы успешно зарегестрировались")
        },
      error: error => {
          if (error.status === 409) this.formError = "Login already taken.";
          else console.log("Something break")
        },
      })
    }



}
