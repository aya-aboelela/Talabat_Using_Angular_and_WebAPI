import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiletabsComponent } from './profiletabs/profiletabs.component';
import { AuthGuardResturantService } from 'src/auth/Services/auth-guard-resturant.service';

const routes: Routes = [
  {path:'profile',component:ProfiletabsComponent,canActivate:[AuthGuardResturantService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturantprofileRoutingModule { }
