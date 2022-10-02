import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';


export function matchPasswords(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup
    const pass = formGroup.get('password')?.value
    const confirmPass = formGroup.get('repeatPassword')?.value

    if (pass === confirmPass) {
      return null
    } else {
      return {PassDoNotMatch: true}
    }
  }
}

