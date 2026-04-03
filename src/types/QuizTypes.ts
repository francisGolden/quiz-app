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

export type AnswerList = Answer[]

export interface Option {
    optionText: string;
    optionId: string;
    optionValue: string;
}

export type QuizList = QuizProps[]

export interface DbSchema {
  username: string;
  quizList: QuizList;
  recordedSessions: RecordedSessions;
}

type RecordedSessions = Session[]

export interface Session {
    sessionAnswers: AnswerList;
    sessionDate: number;
}