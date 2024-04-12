import { Routes } from '@angular/router';
import { TopicSelectionComponent } from './components/topic-selection/topic-selection.component';
import { ResultsComponent } from './components/results/results.component';
import { QuizComponent } from './components/quiz/quiz.component';


export const routes: Routes = [
  {
    path: '',
    component: TopicSelectionComponent,
  },

  {
    path: 'results',
    component: ResultsComponent,
  },

  { path: 'quiz/:title', component: QuizComponent },
];
