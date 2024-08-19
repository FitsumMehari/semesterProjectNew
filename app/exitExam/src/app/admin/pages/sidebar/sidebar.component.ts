import { Component } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private auth: AuthService) {}
  logout() {
    this.auth.logoutAdmin();
  }
}
