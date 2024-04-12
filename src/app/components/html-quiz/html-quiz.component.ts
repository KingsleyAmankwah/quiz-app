import { Component } from '@angular/core';
import { Question, Quiz } from '../../interfaces';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-html-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './html-quiz.component.html',
  styleUrl: './html-quiz.component.css',
})
export class HtmlQuizComponent {
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
      console.log('Received data:', data);
      this.quizData = data.quizzes.find((quiz: Quiz) => quiz.title === 'HTML');
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
