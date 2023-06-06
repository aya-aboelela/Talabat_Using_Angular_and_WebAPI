import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ForbiddenEmailValidator } from '../validations/email.validators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resturant-login-form',
  templateUrl: './resturant-login-form.component.html',
  styleUrls: ['./resturant-login-form.component.scss']
})
export class ResturantLoginFormComponent implements OnInit {


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
    this.enrollService.ResturantLogin(this.loginForm.value).subscribe({
      next: data => {
        console.log(data);
        const token = (<any>data).token;
        localStorage.setItem("jwt", token);
        const decodeToken = this.jwtHelper.decodeToken(token);
        localStorage.setItem("ApplicationUserId", decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
        localStorage.setItem("UserName", decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
        this.router.navigate(["/resturant/profile"]);

      },
      error: err => console.log(err)
    });
  }

}
