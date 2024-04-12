export interface QuizData {
  quizzes: Quiz[];
}

export interface Quiz {
  title: string;
  color: string;
  icon: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}
