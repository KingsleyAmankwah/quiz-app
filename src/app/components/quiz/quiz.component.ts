import { Component } from '@angular/core';
import { Question, Quiz, QuizData } from '../../interfaces';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  quizData: Quiz | undefined;
  currentTopic: string | null = null;
  currentQuestionIndex = 0;
  currentQuestion: Question | undefined;
  selectedOption: number | null = null;
  showAnswer = false;
  submitClicked = false;
  score = 0;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  selectOption(index: number): void {
    // if (this.submitClicked) return;
    this.selectedOption = index;
    this.submitClicked = false;
  }

  submit(): void {
    this.submitClicked = true;
    if (this.selectedOption !== null) {
      this.showAnswer = true;
    }

    if (
      this.selectedOption !== null &&
      this.currentQuestion?.options[this.selectedOption] ===
        this.currentQuestion?.answer
    ) {
      this.score++;
      this.quizService.setScore(this.score);
    }
  }

  nextQuestion(): void {
    this.submitClicked = false;
    this.showAnswer = false;
    this.selectedOption = null;
    this.currentQuestionIndex++;

    if (
      this.quizData &&
      this.currentQuestionIndex < this.quizData.questions.length
    ) {
      this.currentQuestion = this.quizData.questions[this.currentQuestionIndex];
    } else {
      this.router.navigate(['/results']);
    }
  }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.quizService.setTopic(title || '');
    this.quizService.getQuizData().subscribe((data: QuizData) => {
      if (title) {
        this.quizData = data.quizzes.find((quiz: Quiz) => quiz.title === title);
        console.log(this.quizData);
        if (this.quizData) {
          this.quizService.setSelectedQuiz(this.quizData);
          if (this.quizData.questions) {
            this.currentQuestion =
              this.quizData.questions[this.currentQuestionIndex];
          } else {
            console.error('Quiz data or questions array is undefined');
          }
        }
      }
    });
  }

  get progress(): string {
    if (this.quizData && this.quizData.questions) {
      return (
        ((this.currentQuestionIndex + 1) / this.quizData.questions.length) *
          100 +
        '%'
      );
    } else {
      return '0%';
    }
  }
}
