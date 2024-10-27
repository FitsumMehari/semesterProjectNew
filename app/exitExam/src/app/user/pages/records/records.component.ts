import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../../services/result.service';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrl: './records.component.css',
})
export class RecordsComponent implements OnInit {
  constructor(private resultService: ResultService, private auth: AuthService) {}

  results = [{
    examTitle: '',
    fieldofstudy: '',
    score: '',
    updatedAt:''
  }];
  userId :any;

  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.userId = next._id;
    })
    this.resultService.getResultsForOneUser(this.userId)
    this.resultService._results.subscribe((next) => {
      this.results = next;
      console.log(this.results);
    });

  }
}
