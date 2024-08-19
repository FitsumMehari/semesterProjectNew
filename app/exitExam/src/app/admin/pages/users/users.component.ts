import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { ManagetokenService } from '../../../services/managetoken.service';
import { User } from '../../../user/User.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService, private auth: AuthService) {}

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

  addUser() {
    if (this.buttonStatus == 'Add User') {
      this.newUser.isAdmin = this.newUser.userType == 'admin' ? true : false;
      this.userService.addUser(this.newUser);
      this.newUser = {
        isAdmin: false,
        email: '',
        username: '',
        userType: '',
        fieldofstudy: '',
        password: '',
      };
      this.refreshUsersList();
    } else if (this.buttonStatus == 'Update User') {
      this.updateUser(this.selectedUserId);
    }
  }

  deleteUser(userId: any) {
    this.users.forEach((user: any) => {
      if (user._id == userId) {
        let toDelete = confirm(
          'Are you sure you want to delete ' + user.username + "'s account?"
        );

        if (toDelete) {
          this.userService.deleteUser(userId);
          // Refresh The List
          this.refreshUsersList();
        }
      }
    });
  }

  selectUser(userId: any) {
    this.users.forEach((user: any) => {
      if (user._id == userId) {
        user.isAdmin = user.userType == 'admin' ? true : false;
        this.selectedUserId = user._id;
        this.newUser = user;

        this.buttonStatus = 'Update User';
        // console.log(this.newUser);
      }
    });
  }

  updateUser(userId: any) {
    this.users.forEach((user: any) => {
      if (user._id == userId) {
        let toUpdate = confirm(
          'Are you sure you want to update ' + user.username + "'s account?"
        );

        if (toUpdate) {
          let { password, ...otherUserDetails } = user;
          this.userService.updateUser(otherUserDetails);
          this.newUser = {
            isAdmin: false,
            email: '',
            username: '',
            userType: '',
            fieldofstudy: '',
            password: '',
          };
          this.refreshUsersList();
        }
      }
    });
  }
}
