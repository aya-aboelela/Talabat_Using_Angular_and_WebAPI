import { Router } from '@angular/router';
import { CityService } from '../Service/city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  CityList:any=[];
  
  errorMessage:any;
  constructor(private cityService: CityService, private router:Router) { }

  ngOnInit(): void {
    this.cityService.GetAllCities().subscribe(
      {

         next:data=>{console.log(data);
          this.CityList=data},
         error:error=>this.errorMessage=error

      })
  }
  GetRestaurantbyCityId(cityID:any){
    localStorage.setItem("CityId",cityID)
    this.router.navigate(["Restaurants"]);

  }

}
