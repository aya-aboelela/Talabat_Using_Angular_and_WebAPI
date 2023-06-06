import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing/landing.component';
import { AddNewProductComponent } from 'src/resturantprofile/add-new-product/add-new-product.component';
import { RestaurantCityComponent } from 'src/landing/restaurant-city/restaurant-city.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'addProduct', component: AddNewProductComponent },
  { path: 'landing', loadChildren: () => import("../landing/landing.module").then(m => m.LandingModule) },
  { path: 'auth', loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule) },
  { path: 'Restaurants', component: RestaurantCityComponent },
  { path: 'productmodule', loadChildren: () => import("../productmodule/productmodule.module").then(m => m.ProductmoduleModule) },
  { path: 'customer', loadChildren: () => import("../customerprofile/customerprofile.module").then(m => m.CustomerprofileModule) },
  { path: 'resturant', loadChildren: () => import("../resturantprofile/resturantprofile.module").then(m => m.ResturantprofileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
