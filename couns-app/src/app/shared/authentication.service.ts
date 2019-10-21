import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';



import { AngularFireAuth } from "@angular/fire/auth";

import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(public angularFireAuth: AngularFireAuth,private router: Router) {
    this.user = angularFireAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
    
}

signInRegular(email, password) {
  const credential = firebase.auth.EmailAuthProvider.credential( email, password );
return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
}

signup(semail,spassword,re_password){
  if(re_password==spassword)
  {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(semail,spassword).then(
      value=>{
        console.log('success!',value);
        this.router.navigate(['dashboard']);
      }
    ).catch(err=> {
      console.log('something went wrong',err.message);
      this.router.navigate(['signup']);
    })
  }
  else
  {
    console.log('password does not match');
  }
}

  signInWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )  
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }

    logout() {
      this.angularFireAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
    }


    resetPassword(email: string) {
      var auth = firebase.auth();
      return auth.sendPasswordResetEmail(email)
        .then(() => console.log("email sent"))
        .catch((error) => console.log(error))
    }


  }
  







