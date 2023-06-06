import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResturantprofileRoutingModule } from './resturantprofile-routing.module';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { ProfileComponent } from './profile/profile.component';
import { AllbranchesComponent } from './allbranches/allbranches.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfiletabsComponent } from './profiletabs/profiletabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';


@NgModule({
  declarations: [
    AllcategoryComponent,
    ProfileComponent,
    AllbranchesComponent,
    ProfiletabsComponent,
    AddNewProductComponent

  ],
  imports: [
    CommonModule,
    ResturantprofileRoutingModule,
    MatTabsModule,
    ReactiveFormsModule
    ],
  exports:[
    AllcategoryComponent,
    ProfileComponent,
    AllbranchesComponent,
    AddNewProductComponent
  ]
})
export class ResturantprofileModule { }
