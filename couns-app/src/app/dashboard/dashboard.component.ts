import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, observable } from 'rxjs';
import {AuthenticationService} from '../shared/authentication.service';
import {LoginComponent} from '../login/login.component';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {FireserviceService} from '../db_service/fireservice.service';
import { Time } from '@angular/common';

 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 
  public min = new Date(new Date());
  public max = new Date(2020, 0, 1);


  mydate:any;
  mytime:any;

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




  constructor(public nav: NavbarService  ,public auth:AuthenticationService, public db:AngularFirestore,
    public fss:FireserviceService) {
    

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


  read_request()
  {

  }

  reqappt(cr_email:any)
  {
    
   
   // this.fss.timeslot(this.mydate,this.auth.vemail,cr_email);
  }

  usup()
  {
   /*const vemail=this.auth.vemail;
      if(this.type_flag==true)
      {
        this.db.collection('users',ref=>ref.where('email','==',vemail)).doc().set({ 
          Education:this.updet.education,
          fieldofinterest:this.updet.foi,
          phone:this.updet.phone,
          username:this.updet.username,
          workingstate:this.updet.wrkst, 
          
        }).then(res=>{
          console.log('successfully updated');
        },err=>{console.log(err)});
      }
      else
      {
        this.db.collection('users',ref=>ref.where('email','==',vemail)).doc().set({ 
          
          Education:this.updet.education,
          fieldofinterest:this.updet.foi,
          phone:this.updet.phone,
          username:this.updet.username,
          workingstate:this.updet.wrkst,
          preference1:this.updet.pfr1,
          preference2:this.updet.pfr2
        }).then(res=>{
          console.log('successfully updated');
        },err=>{console.log(err)});
      }*/
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



