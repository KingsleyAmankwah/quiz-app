import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Quiz, QuizData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizURL = '/assets/data.json';
  constructor(private http: HttpClient) {}

  private selectedQuizSubject = new BehaviorSubject<Quiz | null>(null);
  selectedQuiz$ = this.selectedQuizSubject.asObservable();

  private scoreSubject = new BehaviorSubject<number>(0);
  score$ = this.scoreSubject.asObservable();

  private currentTopic = new BehaviorSubject<string | null>(null);
  currentTopic$ = this.currentTopic.asObservable();

  setScore(score: number): void {
    this.scoreSubject.next(score);
  }

  resetScore(): void {
    this.scoreSubject.next(0);
  }

  setTopic(topic: string): void {
    this.currentTopic.next(topic);
  }

  setSelectedQuiz(quiz: Quiz): void {
    this.selectedQuizSubject.next(quiz);
  }

  getQuizData(): Observable<QuizData> {
    return this.http.get<QuizData>(this.quizURL);
  }
}
