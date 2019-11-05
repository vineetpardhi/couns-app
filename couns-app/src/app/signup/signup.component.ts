import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { AngularFirestore } from 'angularfire2/firestore';

import {Input, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

import { MatRadioChange } from '@angular/material';
import {FireserviceService} from '../db_service/fireservice.service';
import { AngularFireList } from 'angularfire2/database';




// for database


@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() required: Boolean;

  stype:string;
  semail:string;
  spassword:string;
  re_password:string;

 constructor(public auth:AuthenticationService,  public dbservice:FireserviceService,private db:AngularFirestore  ) {}
  

  onChange(mrchange:MatRadioChange)
    {
      this.stype=mrchange.value;
    }

 
   

  ngOnInit() {

  }

  signup() {
    
  
    if(this.re_password==this.spassword)
    {
   this.dbservice.addUser(this.semail,this.stype);
    }
    this.auth.signup(this.semail,this.spassword,this.re_password);

    
    
  }

  

}

