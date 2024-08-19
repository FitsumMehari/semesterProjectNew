import { Component } from '@angular/core';
import { ResultService } from '../../../services/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  constructor(private resultService: ResultService) {}

  filterInput: any;
  results: any;

  ngOnInit(): void {
    this.refreshResultsList();
  }
  // Refresh The List
  refreshResultsList() {
    this.resultService.getAllResults();
    this.resultService._results.subscribe((next) => {
      this.results = next;
    });
  }
}
