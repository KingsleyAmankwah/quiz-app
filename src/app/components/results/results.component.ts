import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  score = 0;
  selectedQuiz: Quiz | null = null;
  isDarkTheme = false;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.score$.subscribe((score) => {
      this.score = score;

      this.quizService.selectedQuiz.subscribe((quiz) => {
        this.selectedQuiz = quiz;
      });

      this.quizService.isDarkTheme.subscribe((darkTheme) => {
        this.isDarkTheme = darkTheme;
      });
    });
  }

  playAgain(): void {
    this.quizService.resetScore();
    this.quizService.currentTopic.subscribe((topic) => {
      if (topic) {
        this.router.navigate(['/quiz', topic]);
      }
    });
  }
}
