import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ExamService } from '../../../services/exam.service';
import { BehaviorSubject, exhaustMap } from 'rxjs';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-exam-home',
  templateUrl: './exam-home.component.html',
  styleUrl: './exam-home.component.css',
})
export class ExamHomeComponent {
  constructor(
    private auth: AuthService,
    private examService: ExamService,
    private router: Router,
    private questionService: QuestionService
  ) {}

  fieldofstudy: string | undefined;
  exams: any;

  _chosenExam: BehaviorSubject<any> = new BehaviorSubject([]);

  chosenExamButton: any;

  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.fieldofstudy = next.fieldofstudy;

      if (this.fieldofstudy) {
        this.examService.getExams(this.fieldofstudy);
        this.examService._exams.subscribe((next) => {
          this.exams = next;
        });
      }
    });
  }

  setExam(exam: any) {
    this._chosenExam.next(exam);
  }

  chooseExam(_id: string) {
    let examButtons = document.getElementsByClassName('exam-select-btn');
    for (let i = 0; i < examButtons.length; i++) {
      examButtons[i].classList.remove('active');
    }

    this.exams.forEach((exam: any) => {
      if (exam._id == _id) {
        this._chosenExam.next(exam);
        this.questionService.setExam(exam._id)
        // console.log(this._chosenExam.value);
        // this.questionService._exam.next(this._chosenExam);

        this.chosenExamButton = document.getElementById(_id);
        this.chosenExamButton?.classList.add('active');
      }
    });
  }

  // takeExam() {


  //   this.questionService.setExam(this._chosenExam)


  // }
}
