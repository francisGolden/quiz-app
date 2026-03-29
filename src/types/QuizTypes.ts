export interface QuizProps {
  question: string;
  options: Option[];
  correctAnswer: string;
  explanation?: string;
  id: string;
}

export interface Answer extends QuizProps {
    givenAnswer: string;
}

export type Answers = Answer[]

export interface Option {
    optionText: string;
    optionId: string;
    optionValue: string;
}