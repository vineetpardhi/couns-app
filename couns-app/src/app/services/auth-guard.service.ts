import { Injectable } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private authService: AuthenticationService) {
    
   }
        canActivate() {
          if ( this.authService.isLoggedIn() ) {
              return true;
          }
          this.router.navigate(['/']);
          return false;
      }
}
