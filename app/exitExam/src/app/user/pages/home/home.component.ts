import { Component, OnInit } from '@angular/core';
import { User } from '../../User.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService) {}

  user: any;
  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.user = next;
    });
  }
}
