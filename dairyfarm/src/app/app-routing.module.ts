import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CausesComponent } from './causes/causes.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Home2Component } from './home2/home2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NecComponent } from './nec/nec.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dashboard/nec',pathMatch:'full'
  },
  {
    path:'home2',component:Home2Component,
    children: [
      {
        path:'',
        component:HomeComponent
      },{
        path:'causes',component:CausesComponent
      },{
        path:'diseases',component:DiseasesComponent
      },{
        path:'about',component:AboutComponent
      },{
        path:'home',
        component:HomeComponent
      },{
        path:'aboutus',
        component:AboutusComponent
      }
    ]
  },
{
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'signup',
        component:SignupComponent
      },{
        path:'nec',
        component:NecComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
