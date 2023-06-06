import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CustomerRegFormComponent } from './customer-reg-form/customer-reg-form.component';
import { CustomerLoginFormComponent } from './customer-login-form/customer-login-form.component';
import { ResturantRegFormComponent } from './resturant-reg-form/resturant-reg-form.component';
import { ResturantLoginFormComponent } from './resturant-login-form/resturant-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CustomerRegFormComponent,
    CustomerLoginFormComponent,
    ResturantRegFormComponent,
    ResturantLoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
