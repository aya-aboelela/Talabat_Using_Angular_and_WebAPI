import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { RestaurantCityComponent } from './restaurant-city/restaurant-city.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RestaurantCityComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule
  ]
})
export class LandingModule { }
