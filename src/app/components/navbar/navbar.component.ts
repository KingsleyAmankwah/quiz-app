import { Component } from '@angular/core';
import { Quiz } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedQuiz: Quiz | null = null;
  selectQuiz(quiz: Quiz): void {
    this.selectedQuiz = quiz;
  }
}
