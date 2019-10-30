import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import {ChatDialogComponent} from './chat-dialog/chat-dialog.component';
import * as name from './services/auth-guard.service';
import {FooterComponent} from './footer/footer.component'


import { AuthenticationService } from './shared/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [

{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'chat-dialog',component:ChatDialogComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[name.AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
