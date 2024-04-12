import { Routes } from '@angular/router';
import { TopicSelectionComponent } from './components/topic-selection/topic-selection.component';
import { ResultsComponent } from './components/results/results.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HtmlQuizComponent } from './components/html-quiz/html-quiz.component';
import { CssQuizComponent } from './components/css-quiz/css-quiz.component';
import { JavascriptQuizComponent } from './components/javascript-quiz/javascript-quiz.component';
import { AccessibilityQuizComponent } from './components/accessibility-quiz/accessibility-quiz.component';

export const routes: Routes = [
  {
    path: '',
    component: TopicSelectionComponent,
  },

  {
    path: 'results',
    component: ResultsComponent,
  },

  {
    path: 'html-quiz',
    component: HtmlQuizComponent,
  },

  {
    path: 'css-quiz',
    component: CssQuizComponent,
  },

  {
    path: 'javascript-quiz',
    component: JavascriptQuizComponent,
  },

  {
    path: 'accessibility-quiz',
    component: AccessibilityQuizComponent,
  },
];
