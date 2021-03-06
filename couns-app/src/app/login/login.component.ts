import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router} from '@angular/router';
import {DashboardComponent} from'../dashboard/dashboard.component';
import { User } from 'firebase';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit{


  user = {
    email: '',
    password: ''
 };
 
  constructor(private router: Router, private authService: AuthenticationService) { 

  
  }
 
 

  signInWithEmail() {
    
    this.authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          
        
          this.router.navigate(['dashboard']);
       })
       .catch((err) => console.log('error: ' + err));
   
 }


  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }


  resetPassword(email: string) {
    this.authService.resetPassword(email)
  }

  

  ngOnInit() {
  }

}
