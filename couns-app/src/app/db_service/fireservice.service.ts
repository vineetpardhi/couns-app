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
        rating:''
        
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
        CR_email:cr_email
      }).then(res=>{
        console.log('you have have requested for appointment');
      },err=>{console.log(err)});



   }




  
  
}
