import { Component } from '@angular/core';
import { TutorialService } from '../../../services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css'
})
export class AddTutorialComponent {
  constructor(private tutorialService: TutorialService) {}

  tutorial:any = {};

  add() {
    this.tutorialService.addTutorial(this.tutorial);
  }
}
