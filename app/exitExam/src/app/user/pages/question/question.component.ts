import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { ExamService } from '../../../services/exam.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private examService: ExamService,
    private router: Router
  ) {}

  examId: any;
  exam: any;
  currentQuestion: any;
  currentQuestionIndex: any;
  totalQuestions: any;
  timeLeft: any;
  interval: any;
  answers: any = [];
  correctCount = 0;
  incorrectCount = 0;

  examCompleted: boolean = false;

  ngOnInit(): void {
    // load exam
    this.examService
      .getExamById(this.questionService._examId.value)
      .subscribe((next: any) => {
        this.exam = next;
        this.startExam();
      });
  }

  setQuestionIndex(index: any) {
    // update current quesion index
    this.currentQuestionIndex = index;

    // removing the style for the right hand side buttons of numbers
    let questionButtons = document.getElementsByClassName('question-index-btn');
    for (let i = 0; i < questionButtons.length; i++) {
      questionButtons[i].classList.remove('active');
    }

    // update current question
    this.currentQuestion = this.totalQuestions[index];

    // Set the current question index button as the active button
    document.getElementById(index + 1)?.classList.add('active');
  }

  // timer controller
  startTimer() {
    this.timeLeft = 60;
  }

  // beginning
  startExam() {
    this.startTimer();
    this.totalQuestions = this.exam.questions;
    this.setQuestionIndex(0);
  }

  // selecting an answer for a question
  answer(choiceId: any, choice: any, questionIndex: any) {
    this.resetChoiceLineStyles();

    document.getElementById(choiceId)?.classList.add('selected-choice');

    this.answers[questionIndex] = choice;
  }

  //  resetting the border of the selected choice
  resetChoiceLineStyles() {
    let choiceLines = document.getElementsByClassName('choice-line');

    for (let index = 0; index < choiceLines.length; index++) {
      choiceLines[index].classList.remove('selected-choice');
    }
  }

  // finally vaildating answers

  validateAnswers() {
    for (let i = 0; i < this.totalQuestions.length; i++) {
      if (this.answers[i] == this.totalQuestions[i].answer) {
        this.correctCount = this.correctCount + 1;
      } else if (this.answers[i] != this.totalQuestions[i].answer) {
        this.incorrectCount = this.incorrectCount + 1;
      }
    }
    this.examService.saveExamScore(
      this.questionService._examId.value,
      this.correctCount
    );

    // this.correctCount = 0;
    // this.incorrectCount = 0;
    // this.answers = [];
    this.examCompleted = true;
  }

  exitPage() {
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.answers = [];
    this.router.navigate(['/user/exam']);
  }
}
