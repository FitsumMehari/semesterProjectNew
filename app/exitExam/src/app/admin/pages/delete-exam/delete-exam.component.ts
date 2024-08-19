import { Component } from '@angular/core';
import { ExamService } from '../../../services/exam.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-exam',
  templateUrl: './delete-exam.component.html',
  styleUrl: './delete-exam.component.css',
})
export class DeleteExamComponent {
  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute
  ) {}

  exam: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.examService.getSingleExam(params['examId']);
      this.examService._exam.subscribe((next) => {
        this.exam = next[0];
      });
    });
  }

  delete() {
    this.examService.deleteExam(this.exam._id);
  }
}
