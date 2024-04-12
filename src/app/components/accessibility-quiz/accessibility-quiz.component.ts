import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Question, Quiz } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accessibility-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessibility-quiz.component.html',
  styleUrl: './accessibility-quiz.component.css'
})
export class AccessibilityQuizComponent {
  public quizData!: Quiz | undefined;
  public currentQuestion!: Question | undefined;
  public currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  showAnswer = false;

  constructor(private quizService: QuizService) {}

  selectOption(index: number): void {
    this.selectedOptionIndex = index;
  }

  submit(): void {
    if (this.selectedOptionIndex === null) {
      alert('Please select an option');
    } else {
      this.showAnswer = true;
    }
  }

  nextQuestion(): void {
    this.showAnswer = false;
    this.selectedOptionIndex = null;
    this.currentQuestionIndex++;

    if (this.quizData && this.quizData.questions) {
      this.currentQuestion = this.quizData.questions[this.currentQuestionIndex];
    }
  }

  ngOnInit(): void {
    this.quizService.getQuizData().subscribe((data: { quizzes: Quiz[] }) => {
      // console.log('Received data:', data);
      this.quizData = data.quizzes.find((quiz: Quiz) => quiz.title === 'Accessibility');
      if (this.quizData && this.quizData.questions) {
        this.currentQuestion =
          this.quizData.questions[this.currentQuestionIndex];
        // console.log(this.currentQuestion);
      } else {
        console.error('Quiz data or questions array is undefined');
      }
    });
  }
}
