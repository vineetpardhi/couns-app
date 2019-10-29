import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import {AuthenticationService} from '../shared/authentication.service';
import {LoginComponent} from '../login/login.component';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  closeResult: string;


  public dbo:LoginComponent;
  public users: Observable<any[]>;
  public userData: Observable<any[]>;



  constructor(public nav: NavbarService ,db:AngularFirestore ,public auth:AuthenticationService) {
    
    
  // const get_email=auth.vemail;
    //this.userData = db.collection('/users',ref=>ref.where('email','==',get_email)).valueChanges();

  }


  openModal()
  {
            // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  ngOnInit() {
    this.nav.hide();
    this.openModal();
    
  }

  




}



