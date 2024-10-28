import { Component } from '@angular/core';
import { TutorialService } from '../../../services/tutorial.service';
import { ActivatedRoute } from '@angular/router';
import { Material } from '../../../user/Material.interface';

@Component({
  selector: 'app-delete-tutorial',
  templateUrl: './delete-tutorial.component.html',
  styleUrl: './delete-tutorial.component.css'
})
export class DeleteTutorialComponent {
  constructor(
    private tutorialService: TutorialService,
    private activatedRoute: ActivatedRoute
  ) {}

  tutorial:any = {};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.tutorialService.getSingleTutorial(params['tutorialId']);
      this.tutorialService._tutorial.subscribe((next) => {
        this.tutorial = next[0];
      });
    });
  }

  delete() {
    this.tutorialService.deleteTutorial(this.tutorial._id);
  }

}
