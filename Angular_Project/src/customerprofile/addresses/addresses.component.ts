import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerprofileService } from '../Services/customerprofile.service';
import { CityService } from 'src/landing/Service/city.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
address:any;
  postId:number = 1;
    addressForm=this.fb.group({
      cityID:[''],
      districtID:[''],
      streetName:[''],
      apartmentNo:[''],
      floorNo:[''],
      cityName:['']

    })
  ApplicationuserId:any;
  allAddresses:any;
  CityList:any;
  DistrictsList:any;
  display='';
  // seclectedCityID: number=0;

  constructor(public http: HttpClient, private fb:FormBuilder,
    private addressServ : CityService,
    private cityService:CityService,
     private customerServ:CustomerprofileService) { }

  SubmitData(){
    console.log(this.addressForm.value);
    this.ApplicationuserId=localStorage.getItem('ApplicationUserId')
    console.log(this.ApplicationuserId);
    this.addressServ.AddAddress(this.ApplicationuserId,this.addressForm.value).subscribe({
      next:data=>
      {
        this.allAddresses= data;
        console.log(this.allAddresses);
        this.onCloseEmailHandled();
      },
      error:err=>console.log(err.error.message)
    });
  }
  openEmailModal(){
    this.display='block';
  }

  onCloseEmailHandled(){
    this.display='none';
  }
  ngOnInit(): void {
    this.ApplicationuserId=localStorage.getItem('ApplicationUserId')
    this.addressServ.GetCustomerAdress(this.ApplicationuserId).subscribe({
      next:data=>{
        this.allAddresses= data;

      },
      error:err=>console.log(err.error.message)
    });

    this.cityService.GetAllCities().subscribe({
      next:data=>{
        this.CityList= data;

      },
      error:err=>console.log(err.error.message)
    });
  }
  getDistrictByCityId(id:any){
    this.customerServ.GetAllDistricts(id).subscribe({
      next:data=>{
        this.DistrictsList= data;
        console.log(data);
      },
      error:err=>console.log(err.error.message)
    });
  }



  //Address Form
get streetName()
{
  return this.addressForm.get('streetName');
}

get apartmentNo()
{
  return this.addressForm.get('apartmentNo');
}

get floorNo()
{
  return this.addressForm.get('floorNo');
}


}
