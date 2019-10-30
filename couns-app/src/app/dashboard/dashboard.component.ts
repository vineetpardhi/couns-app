import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, observable } from 'rxjs';
import {AuthenticationService} from '../shared/authentication.service';
import {LoginComponent} from '../login/login.component';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  
  updet={
    username:'',
    phone:'',
    education:'',
    foi:'',
    pfr1:'',
    pfr2:'',
    wrkst:'',
    
  };


  closeResult: string;
  type_flag:boolean;

  public dbo:LoginComponent;
  public users: Observable<any[]>;
  public userData: Observable<any[]>;



  public getcoun:Observable<any[]>;
  public profiledata:Observable<any[]>;
  public fi:string;




  constructor(public nav: NavbarService  ,public auth:AuthenticationService, public db:AngularFirestore) {
    

  const get_email=auth.vemail;
  this.userData = this.db.collection('/users',ref=>ref.where('email','==',get_email)).valueChanges();

  this.userData.subscribe(
    users=> {
        users.map(user =>
         {
            let something=user.fieldofinterest;
            this.getFi(something);
           
           if(user.usertype=="CR")
           {
             this.type_flag=true;
           }
           else
           {
             this.type_flag=false;
           }
         }
        )
    });

   

    //getting suggestions for counsellor











  }


  getFi(f:string)
  {
    this.fi=f;
    console.log(this.fi);

    
    let type="CR";
    this.profiledata=this.db.collection('users',ref=>ref.where('fieldofinterest','==',this.fi).where('usertype','==',type)).valueChanges();
    console.log(this.profiledata);
    this.profiledata.subscribe(
      getcoun=>{
        getcoun.map(user=>
          {
            console.log(user.usertype);
            console.log(user.username);
          })
      }

    );

  }


  
 /* upUser()
  {
    this.fbs.userUpdate();

  }*/

  openModal()
  {
            // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn :HTMLElement= document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.addEventListener('click',function() {
          modal.style.display = "none";
        });

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
  }


 
  openCards()
  {
            // Get the modal
        var modal = document.getElementById("profile_card");

        // Get the button that opens the modal
     
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close2")[0];

        // When the user clicks the button, open the modal 
      
        modal.style.display="block";
        // When the user clicks on <span> (x), close the modal
        span.addEventListener('click',function() {
          modal.style.display = "none";
        });

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



