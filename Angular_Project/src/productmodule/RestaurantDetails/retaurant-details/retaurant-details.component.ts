import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResturant } from 'src/productmodule/Interface/Restuarant';
import { ResturantserviceService } from 'src/productmodule/Services/ResturantService/resturantservice.service';

@Component({
  selector: 'app-retaurant-details',
  templateUrl: './retaurant-details.component.html',
  styleUrls: ['./retaurant-details.component.scss']
})
export class RetaurantDetailsComponent implements OnInit {
  ResturantDetails:any;
  ResturantIDFromRoute!:number;
  Resid: number=0;
  currentprd: any;
  productservice: any;
  constructor(private activatedroute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    // this.resturantservice.GetResturantDetails(3).subscribe(
    //   res=>{
    //     this.ResturantDetails=res;
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
            this.ResturantDetails=data
          console.log(data)},
          error:error=>console.log(error)
      });

      })
    // this.activatedroute.paramMap.subscribe(paramMap=>
    //   {
    //      this.Resid=Number(paramMap.get('id'));
    //      console.log(this.Resid);
    //  this.ResturantDetails=this.http.get(`http://localhost:59638/api/Resturant/`+this.Resid)
    //   })
    //  console.log(this.ResturantDetails);

  }

}
