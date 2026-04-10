import { LocalStorage } from 'lowdb/browser'
import { LowSync } from 'lowdb'
import type { DbSchema, QuizProps } from '#/types/QuizTypes'

const defaultData: DbSchema = {
  username: '',
  quizList: [],
  recordedSessions: [],
}

const adapter = new LocalStorage<DbSchema>('quiz-db')
export const db = new LowSync<DbSchema>(adapter, defaultData)

const quizObject: QuizProps = {
  question: 'Domanda provafjdlkjfklasjflkjsdakfjkldasjfklas',
  options: [
    {
      optionText: 'Option text 1',
      optionId: 'Id1',
    },
    {
      optionText: 'Option text 2',
      optionId: 'Id2',
    },
    {
      optionText: 'Option text 3',
      optionId: 'Id3',
    },
  ],
  correctAnswer: 'Id3',
  id: 'rdsr',
}

db.update((data) => {
  data.quizList.push(quizObject)
})