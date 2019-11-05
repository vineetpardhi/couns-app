import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, observable } from 'rxjs';
import {AuthenticationService} from '../shared/authentication.service';
import {LoginComponent} from '../login/login.component';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {FireserviceService} from '../db_service/fireservice.service';
import { Time } from '@angular/common';
import { MatRadioChange } from '@angular/material/radio';


import 'rxjs/add/operator/map'



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

  show_flag:boolean;

  updet={
    username:'',
    phone:'',
    education:'',
    foi:'',
    pfr1:'',
    pfr2:'',
    wrkst:'',
    
  };
  tbio:any;

  closeResult: string;
  type_flag:boolean;

  is_accp:any;
  get_accp:any;

  public dbo:LoginComponent;
  public users: Observable<any[]>;
  public userData: Observable<any[]>;


  public app_det:Observable<any[]>;


  public getcoun:Observable<any[]>;
  public profiledata:Observable<any[]>;
  public fi:string;
  rad_email:any;
  userd_doc: Observable<any[]>;
  public doc_id:any;

  public items: AngularFirestoreCollection<any>;
  ref: any;

  constructor(public nav: NavbarService  ,public auth:AuthenticationService, public db:AngularFirestore,
    public fss:FireserviceService) {
   

      //getting user details to display
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

   
    //getting the id by snapshot method


this.items=db.collection<any>('/users',ref=>ref.where('email','==',get_email));
this.userd_doc=this.items.snapshotChanges().map(actions=>{
  return actions.map(a=>{
    let id=a.payload.doc.id;
    this.getDocid(id);
    return {id};

  });

  
});
this.userd_doc.subscribe();






  }
  //getting doc id from mapping function
  getDocid(id:any)
  {
  this.doc_id=id;
  }


  read_request(mrchange:MatRadioChange)
  {
    this.is_accp=mrchange.value;
    this.get_accp=this.fss.make_appt(this.is_accp,this.mydate,this.auth.vemail,this.rad_email);

  }

  reqappt()
  {
    
   
   this.fss.timeslot(this.mydate,this.auth.vemail,this.rad_email);
  }


  //update user details
  usup()
  {



   const vemail=this.auth.vemail;
      if(this.type_flag==true)
      {
        this.db.collection('/users',ref=>ref.where('email','==',vemail)).doc(this.doc_id).update({ 
          Education:this.updet.education,
          fieldofinterest:this.updet.foi,
          phone:this.updet.phone,
          username:this.updet.username,
          workingstate:this.updet.wrkst, 
          bio:this.tbio
          
        }).then(res=>{
          alert('you have updated your data successfully');
          },err=>{console.log(err)});
      }
      else
      {
        this.db.collection('/users/',ref=>ref.where('email','==',vemail)).doc(this.doc_id).update({ 
          
          Education:this.updet.education,
          fieldofinterest:this.updet.foi,
          phone:this.updet.phone,
          username:this.updet.username,
          workingstate:this.updet.wrkst,
          preference1:this.updet.pfr1,
          preference2:this.updet.pfr2,
          bio:this.tbio
        }).then(res=>{
          alert('you have updated your data successfully');
        },err=>{console.log(err)});
      }
      
  }

  onChange(mrchange:MatRadioChange)
    {
      this.rad_email=mrchange.value;
    }

    
  getFi(f:string)
  {
    this.fi=f;
  

    
    let type="CR";
    this.profiledata=this.db.collection('users',ref=>ref.where('fieldofinterest','==',this.fi).where('usertype','==',type)).valueChanges();
    
    this.profiledata.subscribe(
      getcoun=>{
        getcoun.map(user=>
          {
            
          })
      }

    );

  }

  get_apptN()
  {
   this.app_det=this.db.collection('/timeslot',ref=>ref.where('CR_email','==',this.auth.vemail)).valueChanges();
   this.app_det.subscribe(
     getappt=>{
       getappt.map(det=>{
          let reqapp=det.req_accp;
          this.giveNot(reqapp);
          console.log(det.ce_email);
          console.log(det.date);

       })
     }
   );
     
  }



  giveNot(accp_flag:any)
  {

    if(accp_flag==false)
      this.show_flag=true;
    else
      this.show_flag=false;

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

  openDialog()
  {
    var modal3= document.getElementById("notf_card");
    var span=document.getElementsByClassName("close2")[0];

    modal3.style.display="block";
    span.addEventListener('click',function(){
      modal3.style.display="none";
    });

      window.onclick=function(event){
        if(event.target==modal3)
        {
          modal3.style.display="none";
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




  //upload photo in firebase
 /* upload(event:any) {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    this.ref = this.db.ref(randomId);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);
  }*/







  
  ngOnInit() {
    this.nav.hide();
    this.openModal();
    this.get_apptN();
  }

  




}



