import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.css',
})
export class AddExamComponent {
  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}

  exam: any = {
    examTitle: '',
    fieldofstudy: '',
    questions: [],
  };

  question: any = {
    question: '',
    choices: {
      a: '',
      b: '',
      c: '',
      d: '',
    },
    answer: '',
  };

  ngOnInit(): void {}

  addQuestion() {
    this.exam.questions.push(...[this.question]);

    this.question = {
      question: '',
      choices: {
        a: '',
        b: '',
        c: '',
        d: '',
      },
      answer: '',
    };
    // this.exam.questions[this.questionIndex] = this.question;
  }

  addExam() {
    this.examService.addExam(this.exam);
  }
}
