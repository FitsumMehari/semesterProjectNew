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
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {}

  _exams: BehaviorSubject<any> = new BehaviorSubject([]);
  _exam: BehaviorSubject<any> = new BehaviorSubject([]);

  message!: string;
  response: any;

  setExams(exams: any) {
    this._exams.next(exams);
  }
  setExam(exam: any) {
    this._exam.next(exam);
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
          userId: user._id,
          examId: exam._id,
          score: `${score} / ${exam.questions.length}`,
        };

        const url = environment.apiURL + 'score/';


        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            token: `token ${localStorage.getItem('token')}`,
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

  // For admin

  getAllExams() {
    const url = environment.apiURL + 'admin-exam/:all';

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

        this.setExams(next);
      },
      (error) => {}
    );
  }

  getSingleExam(examId: any) {


    const url = environment.apiURL + 'admin-exam/:' + examId;

    // const url = `http://localhost:3000/material/:${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };

    return this.http.get(url, httpOptions).subscribe((next) => {
      this.setExam(next);
        });
  }

  addExam(material: any) {
    const url = environment.apiURL + 'admin-exam/';
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(url, material, httpOptions).subscribe((next) => {
      this.response = next;
      alert(this.response.message);
      this.router.navigate(['/admin/home/exams']);
    });
  }

  deleteExam(examId: any) {
    const url = environment.apiURL + 'admin-exam/:' + examId;
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.delete(url, httpOptions).subscribe((next) => {
      this.response = next;
      alert(this.response.message);
      this.router.navigate(['/admin/home/exams']);
    });
  }

  updateExam(exam: any) {
    const url = environment.apiURL + 'admin-exam/';
    const httpOptions = {
      headers: new HttpHeaders({
        token: `token ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.put(url, exam, httpOptions).subscribe((next) => {
      this.response = next;
      console.log(this.response);

      alert(this.response.message);
      this.router.navigate(['/admin/home/edit-exam', this.response.exam._id]);
    });
  }
}
