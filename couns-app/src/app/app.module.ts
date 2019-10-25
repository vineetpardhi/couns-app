import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';





import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import {AuthGuardService} from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';



import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    DashboardComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'couns-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
