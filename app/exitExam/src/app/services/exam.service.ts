import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {}

  _exams: BehaviorSubject<any> = new BehaviorSubject([]);
  message!: string;
  response: any;

  setExams(exams: any) {
    this._exams.next(exams);
  }

  getExams(fieldofstudy: string) {
    const url = environment.apiURL + 'exam/:' + fieldofstudy;

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

        this.setExams(next);
      },
      (error) => {}
    );
  }

  getExamById(examId: string) {
    const url = environment.apiURL + 'exam/:' + examId;

    const httpOptions = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions);
  }

  saveExamScore(examId: any, score: any) {
    this.getExamById(examId).subscribe((exam: any) => {
      this.auth._user.subscribe((user) => {
        let scoreToSave = {
          examTitle: exam.examTitle,
          fieldofstudy: exam.fieldofstudy,
          username: user.username,
          userId: user.id,
          examId: exam._id,
          score: `${score} / ${exam.questions.length}`,
        };


        const url = environment.apiURL + 'score/:' + user.id;

        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json',
            'token': `token ${localStorage.getItem('token')}`
           }),
        };

        this.http.post(url, scoreToSave, httpOptions).subscribe(
          (next) => {
            this.response = next;
            this.message = this.response.message;
          },
          (error) => {}
        );

      });
    });
  }
}
