import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../user/User.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private userService: UserService) {}

  user: User = {};

  add() {
    this.userService.addUser(this.user);
  }
}
