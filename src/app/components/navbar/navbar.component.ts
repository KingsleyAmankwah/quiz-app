import { Component } from '@angular/core';
import { Quiz, QuizData } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedQuiz: Quiz | null = null;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.selectedQuiz$.subscribe((quiz) => {
      this.selectedQuiz = quiz;
    });
  }
}
