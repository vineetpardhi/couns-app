import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { isNumber } from 'util';

import {DashboardComponent} from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})



export class FireserviceService {
 
  public vb:DashboardComponent;

  constructor( public afs:AngularFirestore,public authf:AngularFireAuth) {
    
   }

   addUser(semail,stype)
   {
    
    if(stype=='CR')
    {
      this.afs.collection('users').add({
        email:semail,
        Education:'',
        fieldofinterest:'',
        phone:'',
        profile_photo:'',
        username:'',
        usertype:stype,
        workingstate:'',
        rating:'',
        bio:''
        
      }).then(res=>{
        alert('you have registered successfully');
      },err=>{console.log(err)});

    }
    else
    {
      this.afs.collection('users').add({
        email:semail,
        Education:'',
        fieldofinterest:'',
        phone:'',
        preference1:'',
        preference2:'',
        profile_photo:'',
        username:'',
        workingstate:'',
        usertype:stype,
        bio:''

        

      }).then(res=>{
        alert('you have registered successfully');
      },err=>{console.log(err)});

    }
     
    
   }


   timeslot(appt_date: any,ce_email:any,cr_email: any)
   {
      this.afs.collection('/timeslot').add({
        date_time:appt_date,
        ce_email:ce_email,
        CR_email:cr_email,
        req_accp:false
      }).then(res=>{
        alert('you have requested for an appointment');
      },err=>{console.log(err)});



   }

   make_appt(is_accp:boolean,mydate: any,cemail: any,rademail: any)
   {
      let get_app: any;
      if(is_accp)
      {
        this.afs.collection('/appointment').add({
            date:mydate,
            ce_mail:cemail,
            cr_mail:rademail
        }).then(res=>{
          console.log('you have a fixed an appointment');
        },err=>console.log(err));    
        get_app=true;
      }
      else
      {
        get_app=false;
      }

      return get_app;
   }




  
  
}
