import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/productmodule/Interface/product';
import { ResturantProfileService } from '../Services/Resturant-profile.service';
import { ICategory } from '../Interface/ICategory';
import { ICity } from '../Interface/ICity';

@Component({
  selector: 'app-allbranches',
  templateUrl: './allbranches.component.html',
  styleUrls: ['./allbranches.component.scss']
})
export class AllbranchesComponent implements OnInit {

  ResturantId: any;
  ListBranchResturant: IProduct[] = [];
  applicationUserId: any = localStorage.getItem('ApplicationUserId');
  ResturentCities: ICity[] = [];
  display = '';
  display2 = '';
  DefferentCities: ICity[] = [];
  cities: ICity[] = [];
  cityID: any;
  city!:ICity;

  constructor(private _ResturantProfileService: ResturantProfileService) { }
  ngOnInit(): void {

    // this._ResturantProfileService.GetBranchResturant(this.ResturantId).subscribe({
    //   next:data=>this.ListBranchResturant,
    //   error:err=>console.log(err.error.message)
    // })

    this._ResturantProfileService.GetCitiesByResturent(this.applicationUserId).subscribe({
      next: data => {
        console.log(data)
        this.ResturentCities = data;
      },
      error: err => console.log(err.error.message)
    })

  }




  deleteCity(resturentCityID: number, index: number) {
    console.log(index)
    this._ResturantProfileService.DeleteCityFromResturent(resturentCityID).subscribe({
      next: data => {
        console.log(data);
        this.ResturentCities.splice(index, 1);
      },
      error: err => console.log(err.error.message)
    })
  }


  openCityModal() {
    this.display = 'block';

    this._ResturantProfileService.GetCities(this.applicationUserId).subscribe({
      next: data => {
        console.log(data);
        this.DefferentCities = data;
        this.cityID = this.DefferentCities[0].id;
      },
      error: err => console.log(err.error.message)
    })
  }

  onCloseCityHandled() {
    this.display = 'none';
    this.cities = [];

  }


  
 

  AddToCitiesIDs(CityIDSelected:any,DelivaryTimeInput:any,DeliveryFeeInput:any) {
    const modal: ICity = {
      id:CityIDSelected,
      delivaryTime:DelivaryTimeInput,
      delivaryFee:DeliveryFeeInput,
      cityName:'',
      resturentCityID:0

  };
    this.cities.push(modal);
    console.log(this.cities)
    console.log(this.uniqBySetWithArrayFrom(this.cities))
  }

  SubmitData() {
    console.log(this.cities)
    this._ResturantProfileService.AddNewCity(this.applicationUserId, this.uniqBySetWithArrayFrom(this.cities)).subscribe({
      next: (data: any) => {
        this.ResturentCities = data;
        this.cities = [];
        this.onCloseCityHandled();
      },
      error: err => console.log(err.error.message)
    });
  }



  uniqBySetWithArrayFrom<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }


  openCityModal2(resturentCityID:any) {
    this.display2 = 'block';

    this._ResturantProfileService.GetCityDetails(resturentCityID).subscribe({
      next: data => {
        console.log(data);
        this.city = data;
        
      },
      error: err => console.log(err.error.message)
    })
  }

  onCloseCityHandled2()
  {
    this.display2 = 'none';
  }

  EditCity(DelivaryTimeInput2:any,DeliveryFeeInput2:any)
  {
    this.city.delivaryFee=DeliveryFeeInput2;
    this.city.delivaryTime=DelivaryTimeInput2;

    this._ResturantProfileService.EditCityDetails(this.applicationUserId,this.city.resturentCityID,this.city).subscribe({
      next: (data:any) => {
        this.ResturentCities=data;
        this.onCloseCityHandled2();

      },
      error: err => console.log(err.error.message)
    })
    
  }

}

