import { Component, Renderer2 } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'quiz-app';
  private isDarkTheme = false;

  constructor(
    private renderer: Renderer2,
    private quizService: QuizService
  ) {}

  private applyTheme() {
    if (this.isDarkTheme) {
      this.renderer.setStyle(document.body, 'backgroundColor', '#313e51');
      this.renderer.setStyle(document.body, 'color', '#fff');
      this.renderer.setStyle(document.body, 'backgroundImage', 'url("../assets/images/pattern-background-desktop-dark.svg")');
    } else {
      this.renderer.setStyle(document.body, 'backgroundColor', '#f4f6fa');
      this.renderer.setStyle(document.body, 'color', '#313e51');
      this.renderer.setStyle(document.body, 'backgroundImage', 'url("../assets/images/pattern-background-desktop-light.svg")');
    }
  }

  ngOnInit() {
    this.quizService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
      this.applyTheme();
    });
  }
}
