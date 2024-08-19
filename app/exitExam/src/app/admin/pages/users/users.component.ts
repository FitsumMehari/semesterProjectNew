import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { ManagetokenService } from '../../../services/managetoken.service';
import { User } from '../../../user/User.interface';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {}

  filterInput: any;

  loggedUser: any = {};

  newUser: User = {
    isAdmin: false,
    email: '',
    username: '',
    userType: '',
    fieldofstudy: '',
    password: '',
  };

  users: any = [];

  selectedUserId = '';

  user: User = {};

  buttonStatus = 'Add User';

  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.user = next;
    });

    this.refreshUsersList();
  }

  // Refresh The List
  refreshUsersList() {
    this.userService.getAllUsers();
    this.userService._users.subscribe((next) => {
      this.users = next;
    });
  }

  deleteUser(userId: any) {
    this.router.navigate(['/admin/home/delete-user', userId]);
  }

  updateUser(userId: any) {
    this.router.navigate(['/admin/home/update-user', userId]);
  }
}
