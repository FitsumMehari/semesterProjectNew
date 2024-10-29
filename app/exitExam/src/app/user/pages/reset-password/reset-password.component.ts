import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../User.interface';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  constructor(private auth: AuthService) {}

  user: User = {};
  sendEmail() {
    this.auth.sendEmail(this.user);
  }
}
