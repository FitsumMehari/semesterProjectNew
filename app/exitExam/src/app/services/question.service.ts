import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QuestionService implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {

  }

  _examId: BehaviorSubject<any> = new BehaviorSubject('');

  message!: string;
  response: any;

  setExam(examId: any) {
    this._examId.next(examId);
    this._examId.subscribe(() => {
      this.router.navigate(['/user/question']);
    });
  }

  getExams(fieldofstudy: string) {}
}
