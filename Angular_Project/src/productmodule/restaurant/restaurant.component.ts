import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../../app/Interface/IRestaurant';
import { ResturantserviceService } from '../Services/ResturantService/resturantservice.service';

import { Router } from '@angular/router';
import { CartService } from '../Services/CartServices/cart.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  RestaurantList:any=[];
  errorMessage:any;


  constructor(private restaurantservice:ResturantserviceService,private router:Router){}

  ngOnInit(): void {
    this.restaurantservice.GetAllRestaurants().subscribe(
      {

         next:data=>{console.log(data);this.RestaurantList=data},
         error:error=>this.errorMessage=error

      })
  }

  showMenu(item:number)
 {
this.router.navigate(['/productmodule/Menu',item]);


 }


  // renderValues(){
  //   this.restaurantservice.GetAllRestaurants().subscribe(
  //    {
  //       next:data=>this. RestaurantList=data,
  //       error:error=>this.errorMessage=error

  //    })

  }

