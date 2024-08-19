import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../../services/auth.service';
import { ManagetokenService } from '../../../services/managetoken.service';
import { User } from '../../../user/User.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private authService: AuthService) {}

  user: User = {};


  login() {
    this.authService.loginAdmin(this.user);
  }

  togglePassword(elementId: any) {
    let element = document.getElementById(elementId);

    if (element?.getAttribute('type') == 'password') {
      element.setAttribute('type', 'text');
    } else if (element?.getAttribute('type') == 'text') {
      element.setAttribute('type', 'password');
    }
  }
}
