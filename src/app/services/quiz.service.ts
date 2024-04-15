import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Quiz, QuizData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizURL = '/assets/data.json';

  private selectedQuizSubject = new BehaviorSubject<Quiz | null>(null);
  selectedQuiz = this.selectedQuizSubject.asObservable();

  private scoreSubject = new BehaviorSubject<number>(0);
  score$ = this.scoreSubject.asObservable();

  private currentTopicSubject = new BehaviorSubject<string | null>(null);
  currentTopic = this.currentTopicSubject.asObservable();

  private isDarkThemeSubject = new BehaviorSubject<boolean>(true);
  isDarkTheme = this.isDarkThemeSubject.asObservable();

  constructor(private http: HttpClient) {}

  setScore(score: number): void {
    this.scoreSubject.next(score);
  }

  resetScore(): void {
    this.scoreSubject.next(0);
  }

  setTopic(topic: string): void {
    this.currentTopicSubject.next(topic);
  }

  setSelectedQuiz(quiz: Quiz): void {
    this.selectedQuizSubject.next(quiz);
  }

  getQuizData(): Observable<QuizData> {
    return this.http.get<QuizData>(this.quizURL);
  }

  toggleTheme() {
    const currentTheme = this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(!currentTheme);
  }
}
