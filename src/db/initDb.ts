import { LocalStorage } from "lowdb/browser"
import { LowSync } from "lowdb"

export interface Data {
  quizList: []
}

const defaultData: Data = {
    quizList: []
}

const adapter = new LocalStorage<Data>("quiz-db")
export const db = new LowSync<Data>(adapter, defaultData)