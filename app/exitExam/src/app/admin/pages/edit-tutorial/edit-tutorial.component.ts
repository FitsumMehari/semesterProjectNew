import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialService } from '../../../services/tutorial.service';

@Component({
  selector: 'app-edit-tutorial',
  templateUrl: './edit-tutorial.component.html',
  styleUrl: './edit-tutorial.component.css'
})
export class EditTutorialComponent {
  constructor(
    private tutorialService: TutorialService,
    private activatedRoute: ActivatedRoute
  ) {}

  tutorial: any = {};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.tutorialService.getSingleTutorial(params['tutorialId']);
      this.tutorialService._tutorial.subscribe((next) => {
        this.tutorial = next[0];
      });
    });
  }

  update() {
    this.tutorialService.updateTutorial(this.tutorial);
  }
}
