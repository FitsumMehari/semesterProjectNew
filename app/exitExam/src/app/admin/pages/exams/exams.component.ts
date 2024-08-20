import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from '../../../user/Material.interface';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {

  constructor(private examService: ExamService, private router: Router) {}

  filterInput: any;
  examsFound: boolean = false;
  exams: any = [];

  exam: any = {};

  ngOnInit(): void {
    this.refreshExamsList()
  }
  // Refresh The List
  refreshExamsList() {
    this.examService.getAllExams();
    this.examService._exams.subscribe((next) => {
      this.exams = next;
      this.examsFound = true;
    });
  }

  deleteExam(examId: any) {
    this.router.navigate(['/admin/home/delete-exam/', examId]);
  }

  updateExam(examId: any) {
    this.router.navigate(['/admin/home/edit-exam/', examId]);
  }

}
