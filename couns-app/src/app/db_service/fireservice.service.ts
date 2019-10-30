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


   

  /*userUpdate()
  {
   const vemail=this.vb.auth.vemail;
      if(this.vb.type_flag==true)
      {
        this.afs.collection('users',ref=>ref.where('email','==',vemail)).doc().set({ 
          Education:this.vb.updet.education,
          fieldofinterest:this.vb.updet.foi,
          phone:this.vb.updet.phone,
          username:this.vb.updet.username,
          workingstate:this.vb.updet.wrkst, 
          
        }).then(res=>{
          console.log('successfully updated');
        },err=>{console.log(err)});
      }
      else
      {
        this.afs.collection('users',ref=>ref.where('email','==',vemail)).doc().set({ 
          
          Education:this.vb.updet.education,
          fieldofinterest:this.vb.updet.foi,
          phone:this.vb.updet.phone,
          username:this.vb.updet.username,
          workingstate:this.vb.updet.wrkst,
          preference1:this.vb.updet.pfr1,
          preference2:this.vb.updet.pfr2
        }).then(res=>{
          console.log('successfully updated');
        },err=>{console.log(err)});
      }

  }*/



  
  
}
