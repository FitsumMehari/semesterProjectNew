import { Component, OnInit } from '@angular/core';
import { User } from '../../User.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.css',
})
export class CreateNewPasswordComponent implements OnInit {
  constructor(private auth: AuthService) {}

  togglePassword(elementId: string) {
    var element = document.getElementById(elementId);
    if (element?.getAttribute('type') == 'password') {
      element.setAttribute('type', 'text');
    } else if (element?.getAttribute('type') == 'text') {
      element.setAttribute('type', 'password');
    }
  }

  user: User = {};

  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.user = next;
      console.log(next);

    });
  }

  sendPassword() {
this.auth.sendPassword(this.user)
  }
}
