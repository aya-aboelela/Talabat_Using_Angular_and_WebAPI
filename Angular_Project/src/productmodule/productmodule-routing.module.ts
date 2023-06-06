import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductPageComponent } from './main-product-page/main-product-page.component';
import { CartComponent } from './cartcomponent/cart.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


const routes: Routes = [
   
  {path:'AllRestaurants',component:RestaurantComponent},
  {path:'Menu/:id',component:MainProductPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductmoduleRoutingModule { }
