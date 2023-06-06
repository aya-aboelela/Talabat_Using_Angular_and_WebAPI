import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiletabsComponent } from './profiletabs/profiletabs.component';
import { AuthGuardService } from 'src/auth/Services/auth-guard.service';

const routes: Routes = [

  {path:'profile',component:ProfiletabsComponent,canActivate:[AuthGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerprofileRoutingModule { }
