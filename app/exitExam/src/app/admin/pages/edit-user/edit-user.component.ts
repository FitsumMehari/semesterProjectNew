import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../user/User.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  user: User = {};
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userService.getSingleUser(params['userId']);

      this.userService._user.subscribe((next) => {

        this.user = next[0];

      });
    });
  }
  update() {
    this.userService.updateUser(this.user);
  }
}
