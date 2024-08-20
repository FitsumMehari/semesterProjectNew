import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
  constructor(private auth: AuthService) {}

  user: any;
  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.user = next;
    });
  }
  logout() {
    this.auth.logout();
}
}
