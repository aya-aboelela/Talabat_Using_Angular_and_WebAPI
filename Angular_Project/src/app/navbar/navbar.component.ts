import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  UserName: any;
  isCustomer: boolean = true;
  ngOnInit(): void {
  }


  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.UserName = localStorage.getItem("UserName");
      const decodeToken = this.jwtHelper.decodeToken(token);
      if (decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == 'Resturant') {
        this.isCustomer = false;
      }
      return true;
    }
    else {
      return false;
    }
  }


  public logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("ApplicationUserId");
    localStorage.removeItem("UserName");
    this.isCustomer = true;
    this.router.navigate(["/landing/home-page"]);
  }

}
