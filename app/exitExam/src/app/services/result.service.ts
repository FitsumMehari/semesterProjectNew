import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient, private router: Router) {}

  _results: BehaviorSubject<any> = new BehaviorSubject([]);
  // _result: BehaviorSubject<any> = new BehaviorSubject({});
  message!: string;
  response: any;

  setResults(materials: any) {
    this._results.next(materials);
  }

  getResultsForOneUser(userId: any) {
    const url = environment.apiURL + 'score/:' + userId;

    // const url = `http://localhost:3000/material/:${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;

        this.setResults(next);
      },
      (error) => {}
    );
  }


  getAllResults() {
    const url = environment.apiURL + 'admin-score/:all';

    // const url = `http://localhost:3000/material/:${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;

        this.setResults(next);
      },
      (error) => {}
    );
  }
}
