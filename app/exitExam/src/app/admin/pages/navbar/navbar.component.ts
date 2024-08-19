import { Component, OnInit } from '@angular/core';
import { User } from '../../../user/User.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService) {}

  user: User = {};
  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.user = next;
    });
  }

  logout() {
    this.auth.logoutAdmin();
  }
}
