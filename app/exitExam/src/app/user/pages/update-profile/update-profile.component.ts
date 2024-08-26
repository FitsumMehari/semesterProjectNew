import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../User.interface';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css',
})
export class UpdateProfileComponent implements OnInit {
  constructor(private auth: AuthService) {}

  user: User = {};
  updatedUser: User = {};

  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.user = next;
    });
    this.setUpdatedUser(this.user);
  }

  setUpdatedUser(user:any) {
    Object.assign(this.updatedUser, user)
  }


  // Login
  update() {
    this.auth.updateUser(this.updatedUser);
  }

  // Toggle password
  togglePassword(elementId: string) {
    var element = document.getElementById(elementId);
    if (element?.getAttribute('type') == 'password') {
      element.setAttribute('type', 'text');
    } else if (element?.getAttribute('type') == 'text') {
      element.setAttribute('type', 'password');
    }
  }
}
