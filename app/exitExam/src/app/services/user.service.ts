import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  _users: BehaviorSubject<any> = new BehaviorSubject([]);
  message!: string;
  response: any;

  setUsers(materials: any) {
    this._users.next(materials);
  }

  getAllUsers() {
    const url = environment.apiURL + 'admin-user/:all';

    // const url = `http://localhost:3000/material/:${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions).subscribe((next) => {
      this.response = next;
      this.message = this.response.message;

      this.setUsers(next);
    });
  }

  getSingleUser(userId: any) {
    const url = environment.apiURL + 'admin-user/' + userId;

    // const url = `http://localhost:3000/material/:${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions);
  }

  addUser(user: any) {
    const url = environment.apiURL + 'admin-user/';
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(url, user, httpOptions).subscribe((next)=>{
      this.response = next
      alert(this.response.message)
    })
  }

  deleteUser(userId: any) {
    const url = environment.apiURL + 'admin-user/:' + userId;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.delete(url, httpOptions).subscribe((next)=>{
      this.response = next
      alert(this.response.message)
    })
  }

  updateUser(user: any) {
    const url = environment.apiURL + 'admin-user/';
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.put(url, user, httpOptions).subscribe((next)=>{
      this.response = next
      alert(this.response.message)
    })
  }
}
