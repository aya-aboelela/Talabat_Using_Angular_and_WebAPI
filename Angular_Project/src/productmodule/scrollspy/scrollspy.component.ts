import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from '../Interface/product';
import { CategoryService } from '../Services/CategoryService/category.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { ICategoryGetCategoriesByResturantID } from '../Interface/GetCategoriesByResturantID';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantserviceService } from '../Services/ResturantService/resturantservice.service';
import { CartService } from '../Services/CartServices/cart.service';
import { CartComponent } from '../cartcomponent/cart.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2'

// import { NgxSpinnerService } from 'ngx-spinner';
// import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-scrollspy',
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.scss']
})
export class ScrollspyComponent implements OnInit {
  ProductList!: any;
  @Input() listofproductcart: any;
  selectedProductid: number = 0;
  ApplicationuserId: any;

  categoryname: string = "";
  @Output()
  oncatnamechanged!: EventEmitter<string>;
  @Input() recievedProductid: number = 0;
  @ViewChild(CartComponent) Cart: CartComponent | any;
  selectedCatId: number = 0;
  ProductListOfCatID: ICategoryGetCategoriesByResturantID[] = [];
  searchtext: string = "";
  Resid: number = 0;
  currentprd: any;
  ShowProduct: any;
  flagNoItem: boolean = false;
  // private  SpinnerService: NgxSpinnerService,
  constructor(private jwtHelper: JwtHelperService,private router: Router, private cart: CartService, private http: HttpClient, private activatedroute: ActivatedRoute) {

  }
  
  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe(paramMap => {
      this.Resid = Number(paramMap.get('id'));
      console.log(this.Resid);
      this.http.get('http://localhost:59638/api/Category/getCategorybyResturantId/' + this.Resid).subscribe({
        next: data => {
          //console.log(data);
          this.ProductList = data
        },
        error: error => console.log(error)
      });
    });

  }



  onsearchTextEntered(searchvalue: string) {
    this.searchtext = searchvalue;
    console.log(this.searchtext);
  }


  addtocart(item: any) {
   

    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodeToken = this.jwtHelper.decodeToken(token);
      if(decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']=='Customer')
      {
        this.ApplicationuserId = localStorage.getItem('ApplicationUserId')

        this.cart.AddToCart(item, this.ApplicationuserId).subscribe({
          next: data => {
    
            console.log(data);
            this.Cart.ShowProduct = data;
            this.Cart.getSubTotal();
    
          },
    
          error: error => {
            console.log(error);//.error.text
            Swal.fire({
              title:"There are items in your cart from another Resturent",
              text: "Do you want to clear your cart?",
              icon: 'error',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
                console.log(this.ApplicationuserId)
                this.cart.deleteAllCustomerCart(this.ApplicationuserId).subscribe({
                  next:data=>{
                    this.Cart.ShowProduct=[];
                  },
                  error:error=>
                  {console.log(error);}
              })

            }
            })
          },
             } );
      }
      
      else{
        Swal.fire({
          text: "You are not allowed to add to the cart, You can LogIn as Customer",
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(["/auth/CustomerLogin"]);
          }
        })
      }
      
   } 

   else{
    Swal.fire({
      text: "You must be logged in to be able to add to the cart",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(["/auth/CustomerLogin"]);
      }
    })
  }
    
  }



}
