import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-single-exam',
  templateUrl: './single-exam.component.html',
  styleUrl: './single-exam.component.css',
})
export class SingleExamComponent {
  constructor(
    private examService: ExamService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  filterInput: any;
  questions: any = [];

  exam: any;
  question: any = {};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.refreshQuestionssList(params['examId']);
    });
  }
  // Refresh The List
  refreshQuestionssList(examId: any) {
    this.examService.getSingleExam(examId);
    this.examService._exam.subscribe((next) => {
      this.exam = next[0];
    });
  }

  deleteQuestion(questionId: any) {
    this.router.navigate([
      '/admin/home/delete-question/',
      this.exam._id,
      questionId,
    ]);
  }

  updateQuestion(questionId: any) {
    this.router.navigate([
      '/admin/home/edit-question/',
      this.exam._id,
      questionId,
    ]);
  }

  addQuestion() {
    this.router.navigate(['/admin/home/add-question/', this.exam._id]);
  }
}
