import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { isNumber } from 'util';



@Injectable({
  providedIn: 'root'
})



export class FireserviceService {
 

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
        phone:Number,
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
        phone:Number,
        preference1:'',
        preference2:'',
        profile_photo:'',
        username:'',
        usertype:stype,
        

      }).then(res=>{
        alert('you have registered successfully');
      },err=>{console.log(err)});

    }
     
    
   }
  
  
}
