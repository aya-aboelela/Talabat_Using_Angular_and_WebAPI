import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 _Citiesurl:string='http://localhost:59638/api/City/GetAllCities';


  constructor(private http: HttpClient){}

  GetAllCities(){

    return this.http.get(this._Citiesurl).pipe(catchError((err:any)=>{
      return throwError(()=>err.message || "Server Error");
    }));
  }
  GetRestaurantbyCityId(cityID:number){
    return this.http.get(`http://localhost:59638/api/City/GetRestaurantbyCityId?cityID=`+cityID).pipe(catchError((err:any)=>{
      return throwError(()=>err.message || "Server Error");
    }));
  }


  GetCustomerAdress(ApplicationUserId:string){
    return this.http.get(`http://localhost:59638/api/Address?ApplicationUserId=`+ApplicationUserId).pipe(catchError((err:any)=>{
      return throwError(()=>err.message || "Server Error");
    }));
  }
  AddAddress(ApplicationUserId:string,newAdress:any)
    {
    return this.http.post(`http://localhost:59638/api/Address?ApplicationUserId=`+ApplicationUserId,newAdress).pipe(catchError((err: any) => {
         return throwError(() => err.message || "server error")}));
    }

  }

