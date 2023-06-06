import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/Operators';
import { IProduct } from 'src/productmodule/Interface/product';
import { ICategory } from '../Interface/ICategory';
import { ICity } from '../Interface/ICity';
@Injectable({
  providedIn: 'root'
})
export class ResturantProfileService {

//   // city from omnia
// _cityurl:string = "";

// // orders from dolagy
// _orderurl: string = "";

//   // city from omnia
//   _getCustomerurl:string = "";

//   private apiURL = "http://localhost:59638/api/Resturant";
//   httpOptions = {
//       headers: new HttpHeaders({
//           'Content-Type': 'application/json'
//       })
//     }

  constructor(private _HttpClient: HttpClient) { }

  GetResturantProfile(applicationUserId:any)
  {
   return this._HttpClient.get(`http://localhost:59638/api/Resturant/${applicationUserId}`).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
    
  }

  EditResturantProfile(applicationUserId:any,profileForm:any)
  {
   return this._HttpClient.put(`http://localhost:59638/api/Resturant/${applicationUserId}`,profileForm).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
    
  }

   ////////////////////////////////////////////////////////////////////////////////////////////////


  GetCategoriesByResturent(applicationUserId:any):Observable<ICategory[]>
  {
   return this._HttpClient.get<ICategory[]>(`http://localhost:59638/api/Category/GetAllCategoriesNameByResturantID/${applicationUserId}`).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }


  DeleteCategoryFromResturent(ResturentCategoryID:any)
  {
   return this._HttpClient.delete(`http://localhost:59638/api/Category/${ResturentCategoryID}`).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }


  GetCategorys(applicationUserId:any):Observable<ICategory[]>
  {
   return this._HttpClient.get<ICategory[]>(`http://localhost:59638/api/Category/GetAllCtegory?ApplicationUserId=${applicationUserId}`).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }
  
  AddNewCategory(applicationUserId:any,categoriesIDs:any)
  {
   return this._HttpClient.post(`http://localhost:59638/api/Category/${applicationUserId}`,categoriesIDs).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }

 ////////////////////////////////////////////////////////////////////////////////////////////////


 GetCitiesByResturent(applicationUserId:any):Observable<ICity[]>
  {
   return this._HttpClient.get<ICity[]>(`http://localhost:59638/api/City/GetAllCitiesByResturantID/${applicationUserId}`).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }


  GetCities(applicationUserId:any):Observable<ICity[]>
  {
   return this._HttpClient.get<ICity[]>(`http://localhost:59638/api/City/GetDefferentCities?ApplicationUserId=${applicationUserId}`).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }

  
  AddNewCity(applicationUserId:any,cities:any)
  {
   return this._HttpClient.post(`http://localhost:59638/api/City/${applicationUserId}`,cities).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }


  
  DeleteCityFromResturent(ResturentCityID:any)
  {
   return this._HttpClient.delete(`http://localhost:59638/api/City/${ResturentCityID}`).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }


  GetCityDetails(resturentCityID:any):Observable<ICity>
  {
   return this._HttpClient.get<ICity>(`http://localhost:59638/api/City/GetCityDetails?ResturentCityID=${resturentCityID}`).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }


  

  EditCityDetails(applicationUserId:any,resturentCityID:any,city:any):Observable<ICity[]>
  {
   return this._HttpClient.put<ICity[]>(`http://localhost:59638/api/City?ApplicationUserId=${applicationUserId}&ResturentCityID=${resturentCityID}`,city).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }

  // GetProductResturant(ResturantId:any):Observable<IProduct[]>
  // {
  //  return this._HttpClient.get<IProduct[]>(this.apiURL).pipe(catchError((err: any) => {
  //   return throwError(() => err.message || "server error");
  //   }));
  // }
  // GetBranchResturant(ResturantId:any)
  // {
  //  return this._HttpClient.get(this.apiURL).pipe(catchError((err: any) => {
  //   return throwError(() => err.message || "server error");
  //   }));
  // }
  

///////////////////////////////////////////////////////////////////////////
  
AddNewProduct(id:string,formaData:any)
{
 return this._HttpClient.post(`http://localhost:59638/api/Product/`+id,formaData).pipe(catchError((err: any) => {
  return throwError(() => err.message || "server error");
}));
}


}

