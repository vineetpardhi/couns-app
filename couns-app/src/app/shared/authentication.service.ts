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
  private userData: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(public angularFireAuth: AngularFireAuth,private router: Router) {
    this.userData = angularFireAuth.authState;
    
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



  }
  







