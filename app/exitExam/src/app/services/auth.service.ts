import { Injectable, OnInit } from '@angular/core';
import { User } from '../user/User.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
// import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(private http: HttpClient, private router: Router) {
    this.getUser();
  }

  _user: BehaviorSubject<any> = new BehaviorSubject({});
  response: any;
  message!: string;

  ngOnInit(): void {
    // this._user.next(jwtDecode(localStorage.getItem('token') || 'undefined'));
    this.getUser();
  }

  // Get user
  getUser() {
    this.setUser();
    return this._user.value;
  }

  // Set user
  setUser() {
    if (!!localStorage.getItem('token')) {
      this._user.next(jwtDecode(localStorage.getItem('token') || ''));
    } else {
      this._user.next({});
    }
  }

  // Update User
  updateUser(user: User) {
    const url = environment.apiURL + 'auth/update';

    const httpOptions = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    this.http.put(url, user, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;
        localStorage.setItem('token', this.response.accessToken);


        alert(this.message);
        alert("You need to sign in again!");
        localStorage.clear();
        this.setUser();
        this.router.navigate(['/user/sign-in']);
      },
      (error) => {}
    );
  }

  // Register
  register(user: User) {
    const url = environment.apiURL + 'auth/register';

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    this.http.post(url, user, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;
        localStorage.setItem('token', this.response.accessToken);


        alert(this.message);
        alert("You need to sign in!");
        localStorage.clear();
        this.setUser();
        this.router.navigate(['/user/sign-in']);
      },
      (error) => {}
    );
  }

  // Login
  login(user: User) {
    const url = environment.apiURL + 'auth/login';

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    this.http.post(url, user, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;
        localStorage.setItem('token', this.response.accessToken);

        this.setUser();

        this.router.navigate(['/user/home']);
      },
      (error) => {
        alert("Wrong Credientials")
      }
    );
  }

  // Logout
  logout() {
    localStorage.removeItem('token');
    this.setUser();
    this.router.navigate(['/user/home']);
  }
}
