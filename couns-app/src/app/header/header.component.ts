import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Observable } from 'rxjs';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { NavbarService } from '..//navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 ShowNav:boolean=true;
  constructor(public nav: NavbarService ) { 

    
  }

  ngOnInit() {
 
  }

  
}
