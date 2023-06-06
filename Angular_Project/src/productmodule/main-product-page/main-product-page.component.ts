import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../Services/CartServices/cart.service';

@Component({
  selector: 'app-main-product-page',
  templateUrl: './main-product-page.component.html',
  styleUrls: ['./main-product-page.component.scss']
})
export class MainProductPageComponent implements OnInit {
  ShowProduct:any;
  flagNoItem:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
  }

}
