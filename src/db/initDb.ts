import { LocalStorage } from 'lowdb/browser'
import { LowSync } from 'lowdb'
import type { DbSchema } from '#/types/QuizTypes'

const defaultData: DbSchema = {
  username: '',
  quizList: [],
  recordedSessions: [],
}

const adapter = new LocalStorage<DbSchema>('quiz-db')
export const db = new LowSync<DbSchema>(adapter, defaultData)
