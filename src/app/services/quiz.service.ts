import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Quiz, QuizData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizURL = 'assets/data.json';
  constructor(private http: HttpClient) {}

  getQuizData(): Observable<QuizData> {
    return this.http.get<QuizData>(this.quizURL);
  }
}
