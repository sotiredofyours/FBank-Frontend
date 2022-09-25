import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthFormComponent} from "./auth/auth-form.component";
import {RegisterFormComponent} from "./register/register-form.component";


const routes: Routes = [
  { path: 'signin',
    component: AuthFormComponent},
  { path: 'register',
    component: RegisterFormComponent
  },
  {
    path:'**',
    component: AuthFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
