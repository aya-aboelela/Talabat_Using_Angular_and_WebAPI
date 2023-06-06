import { Component, OnInit } from '@angular/core';
import { IResturant } from 'src/productmodule/Interface/Restuarant';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { ResturantserviceService } from 'src/productmodule/Services/ResturantService/resturantservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-resturant',
  templateUrl: './info-resturant.component.html',

  styleUrls: ['./info-resturant.component.scss']
})
export class InfoResturantComponent implements OnInit {
  Resturant:any;
  Resid: number=0;
  currentprd: any;
  productservice: any;
  constructor(private http:HttpClient,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.info.GetResturantBYId(16).subscribe(
    //   res=>{
    //     this.Resturant=res;
    //   }
    // );
    this.activatedroute.paramMap.subscribe(paramMap=>
      {
         this.Resid=Number(paramMap.get('id'));
         console.log(typeof(this.Resid));
         this.http.get(`http://localhost:59638/api/Resturant/`+this.Resid).subscribe({
          next:data=>
          {
            //console.log(data);
            this.Resturant=data},
          error:error=>console.log(error)
      });

      })

  }

}
