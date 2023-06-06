import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductmoduleRoutingModule } from './productmodule-routing.module';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { MainProductPageComponent } from './main-product-page/main-product-page.component';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RetaurantDetailsComponent } from './RestaurantDetails/retaurant-details/retaurant-details.component';
import { ProducttabsComponent } from './producttabs/producttabs/producttabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoResturantComponent } from './Info/info-resturant/info-resturant.component';
import { SearchComponent } from './Search/search/search.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { BreadCrmbComponent } from './breadCrumb/bread-crmb/bread-crmb.component';
import { CartComponent } from './cartcomponent/cart.component';
import { ReviewComponent } from './Review/review.component';
// import { CartComponent } from './cartcomponent/cart.component';


@NgModule({

  declarations: [

    MainProductPageComponent,
    CartComponent,
    RetaurantDetailsComponent,
    ProducttabsComponent,
    InfoResturantComponent,
    SearchComponent,
    ScrollspyComponent,
    BreadCrmbComponent,
    ReviewComponent



  ],
  imports: [
    CommonModule,
    ProductmoduleRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [MainProductPageComponent]
})
export class ProductmoduleModule {


 }


export class AppModule { }
