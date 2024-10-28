import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {



  constructor(private http: HttpClient, private router: Router) {}

  _tutorials: BehaviorSubject<any> = new BehaviorSubject([]);
  _tutorial: BehaviorSubject<any> = new BehaviorSubject([]);
  message!: string;
  response: any;

  setTutorials(tutorials: any) {
    this._tutorials.next(tutorials);
  }

  setTutorial(tutorial: any) {
    this._tutorial.next(tutorial);
  }


  getTutorials(fieldofstudy: string) {
    const url = environment.apiURL + 'admin-tutorial/:' + fieldofstudy;

    const httpOptions = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    this.http.get(url, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;

        this.setTutorials(next);
      },
      (error) => {}
    );
  }

  getAllTutorials() {
    const url = environment.apiURL + 'admin-tutorial/:all';

    const httpOptions = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    this.http.get(url, httpOptions).subscribe(
      (next) => {
        this.response = next;
        this.message = this.response.message;

        this.setTutorials(next);
      },
      (error) => {}
    );
  }

  getSingleTutorial(tutorialId: any) {
    const url = environment.apiURL + 'admin-tutorial/:' + tutorialId;

    // const url = `http://localhost:3000/material/:${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions).subscribe((next) => {
      this.setTutorial(next);
    });
  }

  addTutorial(tutorial: any) {
    const url = environment.apiURL + 'admin-tutorial/';
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(url, tutorial, httpOptions).subscribe((next) => {
      this.response = next;
      alert(this.response.message);
      this.router.navigate(['/admin/home/tutorials']);
    });
  }

  deleteTutorial(tutorialId: any) {
    const url = environment.apiURL + 'admin-tutorial/:' + tutorialId;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.delete(url, httpOptions).subscribe((next) => {
      this.response = next;
      alert(this.response.message);
      this.router.navigate(['/admin/home/tutorials']);
    });
  }

  updateTutorial(tutorial: any) {
    const url = environment.apiURL + 'admin-tutorial/';
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.put(url, tutorial, httpOptions).subscribe((next) => {
      this.response = next;
      alert(this.response.message);
      this.router.navigate(['/admin/home/tutorials']);
    });
  }

}
