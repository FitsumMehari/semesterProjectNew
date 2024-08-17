import { Component, OnInit } from '@angular/core';
import { User } from '../../User.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  constructor(private auth: AuthService) {}

  user: any;
  ngOnInit(): void {
    // this.user = this.auth.getUser();
    this.auth._user.subscribe(next => {this.user = next})

  }

  logout() {
    this.auth.logout();
  }
}
