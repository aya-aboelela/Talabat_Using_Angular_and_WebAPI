import { Component,OnChanges, OnInit,  Output,Input, SimpleChanges, SimpleChange } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { IProductCart } from 'src/productmodule/Interface/ProductCart';
import { CartService } from '../Services/CartServices/cart.service';
import { HttpClient } from '@angular/common/http';
import { ICart } from '../Interface/cart';
import Swal from 'sweetalert2'
import { JwtHelperService } from '@auth0/angular-jwt';

// import { NgxSpinnerService } from 'ngx-spinner';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
 

  public ShowProduct!:ICart[]
   subTotal:number=0;
   ApplicationuserId:any;
  @Input () ResturentId:any;


  listofproductcart:any
  messageerror!:string;
  pid:any;
  productid:any;
  Applicationuser:any;
  productList:[]=[]//list of product
  isVsiable:boolean=true
  isVsiableProductList:[]=[]
  totalPrice:number=0
  Price:any
  @Output() onTotalPrice:EventEmitter<number>
  @Input() receivedTotalPrice:number=0
  @Input() recievedProductid:number=0;

  flagNoItem:boolean=false;
   constructor(private jwtHelper: JwtHelperService,private http:HttpClient,private _activatedroute:ActivatedRoute,private cartService:CartService)
   {
    this.onTotalPrice=new EventEmitter<number>()

   }

  



    ngOnInit(): void {
      
      const token = localStorage.getItem("jwt");
      if (token && !this.jwtHelper.isTokenExpired(token)) {
        const decodeToken = this.jwtHelper.decodeToken(token);
        if(decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']=='Customer')
        {
          this.ApplicationuserId=localStorage.getItem('ApplicationUserId')
          this.cartService.GetCartByApplicationUserId(this.ApplicationuserId).subscribe({
          next:(data:any[])=>{
            this.ShowProduct=data;
            if(data==null)
            this.ShowProduct=[];
            this.getSubTotal();
            this.flagNoItem=true
            console.log(this.ShowProduct);
          },
          error:error=>
          {
          console.log(error);
     
          }
          });
        }
         else{
          this.ShowProduct=[];
        }
     }
     else
     {
      this.ShowProduct=[];
     }



    
   
  
    }


public getSubTotal()
{
  this.subTotal=0;
  this.ShowProduct.forEach(element => {
    this.subTotal+=element.totalPrice;
    });

}

  removeProduct(CartID:number,index:number,elementTotalPrice:number)
    {
      console.log(CartID);
      this.cartService.deleteFromCart(CartID).subscribe({
        next:data=>{
          //console.log(data);
          this.subTotal-= elementTotalPrice;
        },
        error:error=>console.log(error),
      })
        this.ShowProduct.splice(index,1); 
    }




    Decrease(productID:number,QuantityInput:any,item:any)
    {
      let newValue = parseInt(QuantityInput.value) - 1;
        QuantityInput.value=newValue;
        //this.cartService.EditCart(productID,newValue,'2946b9f6-35f7-4e2f-8c2a-7a0ab10885db').subscribe({
          this.cartService.EditCart(productID,newValue,this.ApplicationuserId).subscribe({
          next:data=>{
          console.log(data);
          item.totalPrice=data;
          this.getSubTotal();
        },
        error:error=>console.log(error),
      })
    }


    Increase(productID:number,QuantityInput:any,item:any)
    {
      let newValue =  parseInt(QuantityInput.value) + 1;
      QuantityInput.value=newValue;
      // console.log(QuantityInput.value)
      this.cartService.EditCart(productID,newValue,this.ApplicationuserId).subscribe({
        next:data=>{
         console.log(data);
         item.totalPrice=data;
         this.getSubTotal();
       },
       error:error=>console.log(error),
     })

    }




    makeOrder()
    {
      let Total=this.subTotal+this.ShowProduct[0].delivaryFee;
      this.cartService.MakeOrder(this.ResturentId,Total,this.ApplicationuserId).subscribe({
        next:data=>{
         console.log(data);
         this.ShowProduct=[];
       },
       error:error=>console.log(error),
     })
    }

}
