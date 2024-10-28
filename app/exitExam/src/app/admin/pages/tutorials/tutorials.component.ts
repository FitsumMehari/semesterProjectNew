import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialService } from '../../../services/tutorial.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})
export class TutorialsComponent {
  constructor(private tutorialService: TutorialService, private router: Router) {}

  filterInput: any;
  tutorials: any;

  tutorialsFound: boolean = false;
  newTutorial: any = {};

  selectedMaterialId = '';

  tutorial: any = {};

  ngOnInit(): void {
    this.refreshTutorialsList();
  }
  // Refresh The List
  refreshTutorialsList() {
    this.tutorialService.getAllTutorials();
    this.tutorialService._tutorials.subscribe((next) => {
      this.tutorials = next;

      this.tutorialsFound = true
    });
  }

  deleteTutorial(tutorialId: any) {
    this.router.navigate(['/admin/home/delete-tutorial/', tutorialId]);
  }

  updateTutorial(tutorialId: any) {
    this.router.navigate(['/admin/home/edit-tutorial/', tutorialId]);
  }

}
