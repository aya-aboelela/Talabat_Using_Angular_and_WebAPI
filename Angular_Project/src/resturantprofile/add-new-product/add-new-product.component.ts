import { Component, Input,  OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ResturantserviceService } from '../../productmodule/Services/ResturantService/resturantservice.service';
import { CategoryService } from '../../productmodule/Services/CategoryService/category.service';
import { ResturantProfileService } from '../Services/Resturant-profile.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  applicationUserId:any;

  recievedRestID:any;
  RestaurantList:any;
  categoryList:any;
  categoryListofResturant:any;
  errorMessage: any;
    

  constructor(private fb:FormBuilder,private _ResturantProfileService:ResturantProfileService,private category:CategoryService) { }

  ngOnInit(): void {
    // this.restaurantservice.getAllResturantsName().subscribe({
    //   next:data=>{
    //     //console.log(data);
    //     this.RestaurantList=data},

    //   error:error=>this.errorMessage=error
    // })
    this.applicationUserId=localStorage.getItem('ApplicationUserId');
    console.log(this.applicationUserId)
    this.category.GetAllCategoriesNameByResturantID(this.applicationUserId).subscribe({
      next:(data: any)=>{
        console.log(data)
        this.categoryListofResturant=data;
        //console.log("list: "+ this.categoryListofResturant);
      },

      error:(error: any)=>this.errorMessage=error
  })

  }

  AddProductForm=this.fb.group( 
    {
      Name:this.fb.control('',[Validators.required]),
      Description:this.fb.control(''),
      Image:this.fb.control(null,[Validators.required]),
      Price:this.fb.control('',[Validators.required]),
      CategoryID:this.fb.control('',[Validators.required])
    }
  )


setProductvalidation()
{
  this.AddProductForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>
    {
      if(checkedValue)
      {
          this.AddProductForm.get('isDeleted')?.setValidators(Validators.required);
      }
      else{
        this.AddProductForm.get('isDeleted')?.clearValidators();
      }
      this.AddProductForm.get('isDeleted')?.updateValueAndValidity();
    })
}



  showPreview(event:any)
  {
    const file = event.target.files[0];
    this.AddProductForm.patchValue({
      Image: file
    });
    this.AddProductForm.get('Image')?.updateValueAndValidity()
}

AddProduct()
{
  console.log(this.AddProductForm.value)
  console.log(this.AddProductForm)


  const Formdata = new FormData();
  Formdata.append('Image', this.AddProductForm.get('Image')?.value, 'pic.jpg');
  Formdata.append('Name', this.AddProductForm.get('Name')?.value);
  Formdata.append('Description', this.AddProductForm.get('Description')?.value);
  Formdata.append('Price', this.AddProductForm.get('Price')?.value);
  Formdata.append('CategoryID', this.AddProductForm.get('CategoryID')?.value);
   console.log('FormData',Formdata);
  this._ResturantProfileService.AddNewProduct(this.applicationUserId,Formdata).subscribe({
    next:data=>console.log(data),
    error:err=>console.log(err)
  });



}



}


