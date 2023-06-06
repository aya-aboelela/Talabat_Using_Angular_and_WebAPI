import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResturant } from '../../Interface/Restuarant';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/Operators';
import { ICategoryGetCategoriesByResturantID } from 'src/productmodule/Interface/GetCategoriesByResturantID';

@Injectable({
  providedIn: 'root'
})
export class ResturantserviceService {

  _urlResturantDetails="http://localhost:59638/api/Resturant"
  _urlALlResturant:string='http://localhost:59638/api/Resturant/GetAllRestaurant';
  _Cityurl:string='http://localhost:59638/api/Resturant/GetAllRestaurant';

  constructor(private http:HttpClient) { }
  GetResturantDetails(id:number):Observable<IResturant>
  {
   return this.http.get<IResturant>(this._urlResturantDetails);
  }
  GetAllResturants():Observable<IResturant[]>
  {
   return this.http.get<IResturant[]>(this._urlALlResturant);
  }
  GetResturantBYId(id:number):Observable<ICategoryGetCategoriesByResturantID>
  {
   return this.http.get<ICategoryGetCategoriesByResturantID>(`http://localhost:59638/api/Category/getCategorybyResturantId/`+id);
  }


  GetAllRestaurants(){

    return this.http.get(this._urlALlResturant).pipe(catchError((err:any)=>{
      return throwError(()=>err.message || "Server Error");
    }));
  }



}
