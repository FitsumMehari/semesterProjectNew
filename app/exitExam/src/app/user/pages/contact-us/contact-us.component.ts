import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
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
