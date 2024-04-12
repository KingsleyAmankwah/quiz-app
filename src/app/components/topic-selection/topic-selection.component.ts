import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../interfaces';

@Component({
  selector: 'app-topic-selection',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './topic-selection.component.html',
  styleUrl: './topic-selection.component.css'
})
export class TopicSelectionComponent {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizData().subscribe((data: { quizzes: Quiz[] }) => {
      this.quizzes = data.quizzes;
    });
  }
}
