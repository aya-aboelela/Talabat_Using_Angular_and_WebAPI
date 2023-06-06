import { Component, OnInit } from '@angular/core';
import { CityService } from '../Service/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-city',
  templateUrl: './restaurant-city.component.html',
  styleUrls: ['./restaurant-city.component.scss']
})
export class RestaurantCityComponent implements OnInit {
  cityId:any;
  errorMessage:any;
  constructor(private cityService: CityService,private router:Router) { }
  RestaurantList:any
  ngOnInit(): void {
    this.cityId=localStorage.getItem('CityId')

    this.cityService.GetRestaurantbyCityId(this.cityId).subscribe(
      {

         next:data=>{
          console.log(data);
          this.RestaurantList=data
          console.log(this.RestaurantList);
        },
          error:error=>this.errorMessage=error
      })

  }
  showMenu(item:number)
  {
 this.router.navigate(['/Menu',item]);

  }


}
