import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TutorialService } from '../../../services/tutorial.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css',
})
export class TutorialsComponent implements OnInit {
  constructor(
    private _sanitizer: DomSanitizer,
    private tutorialService: TutorialService,
    private auth: AuthService
  ) {}

  apiLoaded = false;

  // videoId = 'QIZ9aZD6vs0';
  videoId = 'i9WixHfiZPU';
  fieldofstudy: any = '';

  height = 200;
  width = 400;

  startSeconds = 60;
  endSeconds = 120;

  tutorials: any = [];

  ngOnInit(): void {
    this.auth._user.subscribe((next) => {
      this.fieldofstudy = next.fieldofstudy;
    });
    this.tutorialService.getTutorials(this.fieldofstudy);
    this.tutorialService._tutorials.subscribe((next) => {
      this.tutorials = next;
    });
  }
}
