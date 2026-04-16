export interface QuizProps {
  question: string;
  options: Option[];
  correctAnswer: string;
  explanation?: string;
  id: string;
}

export interface Option {
    optionText: string;
    optionId: string;
    optionValue: string;
}