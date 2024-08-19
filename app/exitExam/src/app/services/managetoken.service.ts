import { Injectable, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagetokenService implements OnInit {
  constructor() {

  }

  subscription: Subscription | undefined;

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (!!token) {
      this.user = jwtDecode(token);
    } else {
      this.subscription = this.currentUser.subscribe(
        (loggedUser) => (this.user = loggedUser)
      );
    }
  }

  user = {
    id: '',
    isAdmin: false,
    email: '',
    username: '',
    userType: '',
    fieldofstudy: '',
    isLoggedIn: false,
  };
  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();

  changeUser(userDetails: any) {
    this.userSource.next(userDetails);
  }
}
