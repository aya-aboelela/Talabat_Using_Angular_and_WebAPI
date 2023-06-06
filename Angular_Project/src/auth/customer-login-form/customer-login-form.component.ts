import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForbiddenEmailValidator } from '../validations/email.validators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { EnrollService } from '../Services/enroll.service';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customer-login-form',
  templateUrl: './customer-login-form.component.html',
  styleUrls: ['./customer-login-form.component.scss']
})
export class CustomerLoginFormComponent implements OnInit {
  invalidLogin?: boolean;
  loginForm = this.fb.group({
    password: ['', [Validators.required]],
    email: ['', [Validators.required, ForbiddenEmailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]],
  })

  constructor(private jwtHelper: JwtHelperService, private enrollService: EnrollService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submitData() {
    this.enrollService.CustomerLogin(this.loginForm.value).subscribe({
      next: data => {
        console.log(data);
        const token = (<any>data).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        const decodeToken = this.jwtHelper.decodeToken(token);
        localStorage.setItem("ApplicationUserId", decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
        localStorage.setItem("UserName", decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
        this.router.navigate(["/customer/profile"]);

        //this.toastr.success("Logged In successfully");
        // this.enrollService.TestToken().subscribe({
        //   next:data=>
        //   {
        //     console.log(data);
        //    }
        //   ,
        //   error:err=>
        //   {
        //     console.log(err);

        //   }
        // });;
      }
      ,
      error: err => {
        console.log(err);
        this.invalidLogin = true;
      }
    });
  }

}
