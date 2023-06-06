import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Interface/ICategory';
import { ResturantProfileService } from '../Services/Resturant-profile.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss']
})
export class AllcategoryComponent implements OnInit {

  applicationUserId:any=localStorage.getItem('ApplicationUserId');
  ResturentCategorys:ICategory[]=[];
  display='';
  DefferentCategories:ICategory[]=[];
  categoriesIDs:number[]=[];
  categoryID:any;

constructor(private _ResturantProfileService:ResturantProfileService){}
ngOnInit(): void {

//   this._ResturantProfileService.GetCategorys().subscribe({
//   next:data=>this.ListCategorys,
//   error:err=>console.log(err.error.message)
// })

this._ResturantProfileService.GetCategoriesByResturent(this.applicationUserId).subscribe({
  next:data=>{
    console.log(data)
    this.ResturentCategorys=data;
    
  },
  error:err=>console.log(err.error.message)
})

}




deleteCategory(resturentCategoryID:number,index:number)
{
  console.log(index)
  this._ResturantProfileService.DeleteCategoryFromResturent(resturentCategoryID).subscribe({
    next:data=>{
      console.log(data);
      this.ResturentCategorys.splice(index,1);
    },
    error:err=>console.log(err.error.message)
  })
}


openCategoryModal(){
  this.display='block';
  
  this._ResturantProfileService.GetCategorys(this.applicationUserId).subscribe({
    next:data=>{
      console.log(data);
      this.DefferentCategories=data;
      this.categoryID=this.DefferentCategories[0].id;
    },
    error:err=>console.log(err.error.message)
  })
}

onCloseCategoryHandled(){
  this.display='none';
  this.categoriesIDs=[];
}



getSelectedCategoryID(event:any)
{
  this.categoryID=event.target.value;
}


AddTocategoriesIDs()
{
  this.categoriesIDs.push(this.categoryID);
  console.log(this.categoriesIDs)
}

SubmitData(){
console.log(this.categoriesIDs)
  this._ResturantProfileService.AddNewCategory(this.applicationUserId,this.uniqBySetWithArrayFrom(this.categoriesIDs)).subscribe({
    next:(data:any)=>
    {
      this.ResturentCategorys=data;
      this.categoriesIDs=[];

      this.onCloseCategoryHandled();
    },
    error:err=>console.log(err.error.message)
  });
}



uniqBySetWithArrayFrom<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

}
