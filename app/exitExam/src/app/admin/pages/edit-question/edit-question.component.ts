import { Component } from '@angular/core';
import { ExamService } from '../../../services/exam.service';
import { ActivatedRoute } from '@angular/router';
import { Material } from '../../../user/Material.interface';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrl: './edit-question.component.css',
})
export class EditQuestionComponent {
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
        console.log(this.question.question);

        this.questionIndex = this.exam.questions.indeOf(this.question);
      });
    });
  }

  update() {
    this.exam.questions[this.questionIndex] = this.question;
    this.examService.updateExam(this.exam);
  }
}
