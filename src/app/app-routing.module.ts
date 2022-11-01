import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthFormComponent} from "./auth/auth-form.component";
import {RegisterFormComponent} from "./register/register-form.component";
import {AccountsComponent} from "./accounts/accounts.component";


const routes: Routes = [
  { path: 'signin',
    component: AuthFormComponent},
  { path: 'register',
    component: RegisterFormComponent
  },
  {path:'',
    component: AuthFormComponent
  },
  {path: 'accounts', component: AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
