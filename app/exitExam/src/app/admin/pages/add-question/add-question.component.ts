import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css',
})
export class AddQuestionComponent {
  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}

  exam: any;
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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.examService.getSingleExam(params['examId']);
      this.examService._exam.subscribe((next) => {
        this.exam = next[0];
      });
    });
  }

  add() {
    this.exam.questions.push(...[this.question]);
    this.examService.updateExam(this.exam);
  }
}
