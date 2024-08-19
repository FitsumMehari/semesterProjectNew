import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, Subscription, take } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { User } from '../user/User.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate, OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  user: User | undefined;

  ngOnInit(): void {}

  canActivate(): boolean {
    let token = localStorage.getItem('token');
    if (!!token) {
      this.user = jwtDecode(token);
      console.log(this.user?.isLoggedIn);

      if ((this.user?.isLoggedIn) && this.user?.isAdmin) {
        return true;
      } else {
        this.router.navigate(['/admin/sign-in']);
        return false;
      }
    } else {
      this.router.navigate(['/admin/sign-in']);
      return false;
    }
  }
}
