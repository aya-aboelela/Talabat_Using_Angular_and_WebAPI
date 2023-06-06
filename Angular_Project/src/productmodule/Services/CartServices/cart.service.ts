import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/Operators';
import { ICart } from 'src/productmodule/Interface/cart';



@Injectable({
  providedIn: 'root'
})
export class CartService {
constructor(private http:HttpClient) { }

AddToCart(ProductID:number,ApplicationUserId:string): Observable<ICart[]>
{http://localhost:59638/api/Cart?ProductID=12&ApplicationUserId=:
//return this.http.post<ICart>(`http://localhost:59638/api/Cart?ProductID=`+ProductID+`&ApplicationUserId=`+ApplicationUserId,0);
return this.http.post<ICart[]>(`http://localhost:59638/api/Cart/`+ProductID+`/`+ApplicationUserId,undefined)
.pipe(catchError((err: any) => {
  return throwError(() => err.message || "server error");
  }));
}

GetCartByApplicationUserId(ApplicationUserId:string): Observable<ICart[]>
{
  return this.http.get<ICart[]>(`http://localhost:59638/api/Cart/ApplicationUserId?ApplicationUserId=`+ApplicationUserId)
}


EditCart(ProductID:number, quantity:number, ApplicationUserId:string)
{
  return this.http.put(`http://localhost:59638/api/Cart/`+ProductID+`/`+quantity+`/`+ApplicationUserId,undefined)
}

deleteFromCart(id:number)
{
  return this.http.delete('http://localhost:59638/api/Cart/'+id)
}



deleteAllCustomerCart(id:string)
{
  return this.http.delete('http://localhost:59638/api/Cart/ApplicationUserId?ApplicationUserId='+id)
}


MakeOrder(ResturentId:number, Total:number,ApplicationUserId:string)
{
  return this.http.post(`http://localhost:59638/api/Order/`+ResturentId+`/`+Total+`/`+ApplicationUserId,undefined)
}


}
