import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerprofileService } from '../Services/customerprofile.service';
import { ForbiddenEmailValidator } from 'src/auth/validations/email.validators';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  CustomerInfo: any;
  ApplicationuserId: any;

  CustomerInfoForm: any = this.fb.group({
    email: ['', [Validators.required, ForbiddenEmailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]],
    customerFirstName: ['', [Validators.required]],
    customerLastName: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private customerServ: CustomerprofileService) { }

  ngOnInit(): void {

    this.ApplicationuserId = localStorage.getItem('ApplicationUserId')

    this.customerServ.GetCustomerInfo(this.ApplicationuserId).subscribe({

      next: (data: any) => {
        // console.log(data)

        this.CustomerInfoForm.patchValue({
          email: data.email,
          customerFirstName: data.customerFirstName,
          customerLastName: data.customerLastName,
          gender: data.gender,

        })
        console.log(this.CustomerInfoForm.value)
      },

      error: err => console.log(err.error.message)
    });
  }

  //Account Info Form

  get email() {
    return this.CustomerInfoForm.get('email');
  }
  get customerFirstName() {
    return this.CustomerInfoForm.get('customerFirstName');
  }
  get customerLastName() {
    return this.CustomerInfoForm.get('customerLastName');
  }
  get gender() {
    return this.CustomerInfoForm.get('gender');
  }


  SubmitData() {
    console.log(this.CustomerInfoForm.value)
    // const Formdata = new FormData();

    // Formdata.append('email', this.CustomerInfoForm.get('email')?.value);
    // Formdata.append('fName', this.CustomerInfoForm.get('fName')?.value);
    // Formdata.append('lName', this.CustomerInfoForm.get('lName')?.value);
    // Formdata.append('gender', this.CustomerInfoForm.get('gender')?.value);

    this.customerServ.EditCustomerProfile(this.ApplicationuserId, this.CustomerInfoForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.CustomerInfo = data;
      },
      error: err => console.log(err.error.message)
    })

  }

  display = 'none';

  openEmailModal() {
    this.display = 'block';
  }

  onCloseEmailHandled() {
    this.display = 'none';
  }

}
