import { Component, OnInit,Input } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import {AuthenticationService} from '../shared/authentication.service';
import {LoginComponent} from '../login/login.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  public dbo:LoginComponent;
  public users: Observable<any[]>;
  public userData: Observable<any[]>;


  

  constructor(public nav: NavbarService ,db:AngularFirestore ,public auth:AuthenticationService) {
    
   const get_email=auth.vemail;
    this.userData = db.collection('/users',ref=>ref.where('email','==',get_email)).valueChanges();
  
    
      
   }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  ngOnInit() {
    this.nav.hide();
  }

}
