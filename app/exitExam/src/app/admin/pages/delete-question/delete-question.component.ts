import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrl: './delete-question.component.css',
})
export class DeleteQuestionComponent {
  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}

  exam: any;
  questions: any;
  question: any;
  questionIndex: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.examService.getSingleExam(params['examId']);
      this.examService._exam.subscribe((next) => {
        this.exam = next[0];
        this.question = this.exam.questions[params['questionId']];

        this.questionIndex = this.exam.questions.indeOf(this.question);
      });
    });
  }

  delete() {
    var index = this.exam.questions.indexOf(this.question)
    this.exam.questions.splice(index, 1)
    this.examService.updateExam(this.exam);
  }
}
