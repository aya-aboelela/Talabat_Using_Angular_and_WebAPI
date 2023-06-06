import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerprofileRoutingModule } from './customerprofile-routing.module';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AllordersComponent } from './allorders/allorders.component';
import { ProfiletabsComponent } from './profiletabs/profiletabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountInfoComponent,
    AddressesComponent,
    AllordersComponent,
    ProfiletabsComponent,
    
  ],
  imports: [
    CommonModule,
    CustomerprofileRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerprofileModule { }
