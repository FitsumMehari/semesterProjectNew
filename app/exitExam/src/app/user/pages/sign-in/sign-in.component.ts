import { Component } from '@angular/core';
import { User } from '../../User.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private auth: AuthService) {}

  user: User = {};

  // For the toggle password eye button
  togglePassword(elementId: string) {
    var element = document.getElementById(elementId);
    if (element?.getAttribute('type') == 'password') {
      element.setAttribute('type', 'text');
    } else if (element?.getAttribute('type') == 'text') {
      element.setAttribute('type', 'password');
    }
  }

  // Login
  login() {
    this.auth.login(this.user);
  }
}
