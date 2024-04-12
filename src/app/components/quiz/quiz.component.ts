import { Component } from '@angular/core';
import { Question, Quiz, QuizData } from '../../interfaces';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  quizData: Quiz | undefined;
  currentQuestionIndex = 0;
  currentQuestion: Question | undefined;
  selectedOptionIndex: number | null = null;
  showAnswer = false;


  constructor(private quizService: QuizService, private route: ActivatedRoute) {}

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
    const title = this.route.snapshot.paramMap.get('title');
    this.quizService.getQuizData().subscribe((data: QuizData) => {
      if (title) {

        this.quizData = data.quizzes.find((quiz: Quiz) => quiz.title === title);
        console.log(this.quizData);
        if (this.quizData && this.quizData.questions) {
          this.currentQuestion = this.quizData.questions[this.currentQuestionIndex];
        } else {
          console.error('Quiz data or questions array is undefined');
        }
      }
    });
  }
}
