import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { ICategorySelectedResturant } from 'src/productmodule/Interface/categorListoFSelectedResturant';
import { ICategoryGetCategoriesByResturantID } from 'src/productmodule/Interface/GetCategoriesByResturantID';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  _urlAllCategories="http://localhost:59638/api/Category/GetAllCtegory";
  _urlGetNameByCatID="http://localhost:59638/api/Category/GetAllCtegory";



  constructor(private http:HttpClient) { }
 
  GetAllCategoriesByResturantID(id:number):Observable<ICategoryGetCategoriesByResturantID>
  {
   return this.http.get<ICategoryGetCategoriesByResturantID>('http://localhost:59638/api/Category/getCategorybyResturantId/'+ id)
  }


  GetAllCategoriesNameByResturantID(id:string)
  {
    return this.http.get('http://localhost:59638/api/Category/GetAllCategoriesNameByResturantID/'+ id)
  }


}
