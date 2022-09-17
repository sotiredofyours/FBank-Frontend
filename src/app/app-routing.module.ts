import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthFormComponent} from "./forms/auth-form/auth-form.component";
import {RegisterFormComponent} from "./forms/register-form/register-form.component";


const routes: Routes = [
  { path: 'signin',
    component: AuthFormComponent},
  { path: 'register',
    component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
