import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerprofileService {

  constructor(private http: HttpClient) { }

  private apiURL = "http://localhost:59638/api/Address/PostAddress";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  GetCustomerInfo(ApplicationUserId: string) {

    return this.http.get(`http://localhost:59638/api/Customer/${ApplicationUserId}`).pipe(catchError((err: any) => {
      return throwError(() => err.message || "Server Error");
    }));
  }

  EditCustomerProfile(ApplicationUserId: any, profileForm: any) {
    return this.http.put(`http://localhost:59638/api/Customer/${ApplicationUserId}`, profileForm).pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
    }))
  }

  GetAllDistricts(districtID: number) {

    return this.http.get(`http://localhost:59638/api/City/GetDistrictByCityId?id=` + districtID).pipe(catchError((err: any) => {
      return throwError(() => err.message || "Server Error");
    }));
  }

  GetAllOrdersByCustomerID(ApplicationUserId: string) {
    return this.http.get(`http://localhost:59638/api/Order/GetOrdersByUserID?ApplicationUserId=` + ApplicationUserId).pipe(catchError((err: any) => {
      return throwError(() => err.message || "Server Error");
    }));
  }
  GetOrdersDetails(orderId: number) {
    return this.http.get(`http://localhost:59638/api/Order/id?id=` + orderId).pipe(catchError((err: any) => {
      return throwError(() => err.message || "Server Error");
    }));
  }

}
