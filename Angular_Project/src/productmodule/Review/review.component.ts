import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HubConnection, HubConnectionBuilder} from "@aspnet/signalr";
import{HttpClient} from '@angular/common/http'
import * as signalR from '@aspnet/signalr';

import { environment } from 'src/environments/environment';
import { IReview } from '../Interface/review';
import { FormBuilder, Validators } from '@angular/forms';
import { SignalrService } from '../Services/SignalrService/signalr.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
  Resturant:any
  Resid:number=0
  reviewList:IReview[]=[]
  date:any
  reviewAdded!:IReview
  today!:string
  public disply ='none';
  private hubConnectionBuilder!:HubConnection
  counter=3
  applicationUserId:any

  showMore(){
      this.reviewService.GetAllReviews().subscribe({
        next:data=>{
          this.reviewList=data
          this.counter=this.counter+3
          console.log(this.reviewList)
        },
        error:error=>console.log(error),
      })
  }

 
  constructor(private http:HttpClient,private formbuilder:FormBuilder,private reviewService:SignalrService,private activatedroute:ActivatedRoute){}

  review = this.formbuilder.group({
    mytext: ['', Validators.required],
  });

  async ngOnInit(): Promise<void> {
    this.applicationUserId=localStorage.getItem("ApplicationUserId");
    //console.log(this.len)
    this.reviewService.GetThreeReviews().subscribe({
      next:data=>{
        this.reviewList=data
        console.log(this.reviewList)
      },
      error:error=>console.log(error),
    })

    this.activatedroute.paramMap.subscribe(paramMap=>
      {
         this.Resid=Number(paramMap.get('id'));
         console.log(typeof(this.Resid));
         this.http.get(`http://localhost:59638/api/Resturant/`+this.Resid).subscribe({
          next:data=>
          {
            //console.log(data);
            this.Resturant=data
          },
          
          error:error=>console.log(error)
          
      });
      console.log(typeof(this.Resid));

      })
    const d=new Date()
    
    this.reviewAdded={text:"",resturantId:this.Resid,date:d}

    this.hubConnectionBuilder =new signalR.HubConnectionBuilder().withUrl('http://localhost:59638/Review',
    {
      skipNegotiation : true ,
      transport:signalR.HttpTransportType.WebSockets
    }).configureLogging(signalR.LogLevel.Debug).build();
    
    //this.hubConnectionBuilder.off()
    await  setTimeout(() => {

      this.hubConnectionBuilder.start().then(() => {
        console.log("connection started");
      }).catch(err => console.log(err));
    }, 2000);


}
async sendReview() 
{
  this.hubConnectionBuilder.invoke('NewReview',this.reviewAdded,this.applicationUserId);
  await this.hubConnectionBuilder.on('NewReviewNotify',(rev) => {
    //const element=document.getElementById("CreateReviewSignalR") ;
    console.log(rev)
    this.reviewList.unshift(rev)

        //   element?.textContent += 
        //   `<div class="row">
        //   <div class="col-2">
        //     <div style="margin-left: 15px;"><label>${rev.text}</label></div>
        //   </div>
    
        //   <div class="col-2" style="text-align: start;">
        //     <label>Nada</label>
        //   </div>
    
        //   <div class="col-8" style="text-align: end;">
        //     <label>${rev.date}</label>
        //   </div>
        // </div>
        //   `
       });
   this.reviewService.AddReview(this.reviewAdded,this.applicationUserId).subscribe({
    next:data=>{
      console.log(data)
    },
    error:error=>console.log(error),
  });

}
}
