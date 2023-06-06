import { Component, OnInit } from '@angular/core';
import { CustomerprofileService } from '../Services/customerprofile.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {



  constructor( private customerServ:CustomerprofileService) { }
  ApplicationuserId:any;
  OrderList:any;
  display='';
  OrderDetails:any;


  ngOnInit(): void {
    this.ApplicationuserId=localStorage.getItem('ApplicationUserId')
    this.customerServ.GetAllOrdersByCustomerID(this.ApplicationuserId).subscribe({
      next:data=>{
        this.OrderList= data;
        console.log(data)
        console.log(this.OrderList)
      },
      error:err=>console.log(err.error.message)
    });

  }



  openEmailModal(id:any){
    this.display='block';
    console.log(id);
    this.customerServ.GetOrdersDetails(id).subscribe({
      next:data=>{
        this.OrderDetails= data;
        console.log(this.OrderDetails)
      },
      error:err=>console.log(err.error.message)
    });
  }

  onCloseEmailHandled(){
    this.display='none';
  }

}
