import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegFormComponent } from './customer-reg-form/customer-reg-form.component';
import { CustomerLoginFormComponent } from './customer-login-form/customer-login-form.component';
import { ResturantRegFormComponent } from './resturant-reg-form/resturant-reg-form.component';
import { ResturantLoginFormComponent } from './resturant-login-form/resturant-login-form.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthGuardResturantService } from './Services/auth-guard-resturant.service';

const routes: Routes = [
  {path:'CustomerRegister',component:CustomerRegFormComponent},
  {path:'CustomerLogin',component:CustomerLoginFormComponent},
  {path:'ResturantRegister',component:ResturantRegFormComponent},
  {path:'ResturantLogin',component:ResturantLoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
