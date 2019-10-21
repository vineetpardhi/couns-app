import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

// for database


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  semail:string;
  spassword:string;
  re_password:string;
 constructor(public auth:AuthenticationService) {}
  

 

  ngOnInit() {
  }

  signup() {
    this.auth.signup(this.semail,this.spassword,this.re_password);
  }

}
