import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../../services/material.service';
import { UserService } from '../../../services/user.service';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  constructor(private matService: MaterialService, private userService: UserService, private examService: ExamService) {}

  users: any = []
  materials: any
  exams: any

  ngOnInit(): void {
    this.refreshMaterialsList();
    this.refreshUsersList();
    this.refreshExamsList();

  }
   // Refresh The Lists
   refreshMaterialsList() {
    this.matService.getAllMaterials();
    this.matService._materials.subscribe((next) => {
      this.materials = next;
    });
  }


   refreshExamsList() {
    this.examService.getAllExams();
    this.examService._exams.subscribe((next) => {
      this.exams = next;
    });
  }

  refreshUsersList() {
    this.userService.getAllUsers();
    this.userService._users.subscribe((next) => {
      this.users = next;
    });
  }
}
