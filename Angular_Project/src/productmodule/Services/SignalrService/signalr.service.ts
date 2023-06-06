import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  HttpTransportType, HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Observable, defer, from, isObservable, throwError } from 'rxjs';
import { catchError } from 'rxjs/Operators';
import { IResturant } from 'src/productmodule/Interface/Restuarant';
import { IReview } from 'src/productmodule/Interface/review';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
hubConnection!:HubConnection
  constructor(private http:HttpClient) { }
  AddReview(obj:any,applicationUserId:any)
  {
    return defer(() => from(this.http.post(`http://localhost:59638/api/ReviewRoom/ApplicationUserId?ApplicationUserId=${applicationUserId}`,obj))
    .pipe(catchError((err) => {
      return throwError(() => err.message || "server error");
    })));
  }
  GetAllReviews():Observable<IReview[]>
  {
    return this.http.get<IReview[]>(`http://localhost:59638/api/ReviewRoom`)
  }
  GetThreeReviews():Observable<IReview[]>
  {
    return this.http.get<IReview[]>(`http://localhost:59638/api/ReviewRoom/display`)
  }

}
