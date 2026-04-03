import { createFileRoute } from '@tanstack/react-router'
import Quiz from '#/components/Quiz'
import type { QuizProps } from '#/types/QuizTypes'
import { db } from '#/db/initDb'

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
})

function RouteComponent() {
  const question: QuizProps = {
      "question": "Which year was the European Union formally established?",
      "options": [
        {
          "optionId": "id1",
          "optionText": "1992",
          "optionValue": ""
        },
        {
          "optionId": "id2",
          "optionText": "1985"
        },
        {
          "optionId": "id3",
          "optionText": "1995"
        },
        {
          "optionId": "id4",
          "optionText": "2000"
        }
      ],
      "correctAnswer": "id1",
      "id": "quiz1"
    }
  db.update((data) => {
    data.quizList.push(question)
  })

  console.log(db)
  const quizObject: QuizProps = {
    question: 'Domanda provafjdlkjfklasjflkjsdakfjkldasjfklas',
    options: [
      {
        optionText: 'Option text 1',
        optionId: 'Id1',
        optionValue: '1',
      },
      {
        optionText: 'Option text 2',
        optionId: 'Id2',
        optionValue: '2',
      },
      {
        optionText: 'Option text 3',
        optionId: 'Id3',
        optionValue: '3',
      },
    ],
    correctAnswer: '3',
    id: 'rdsr',
  }

  return (
    <div>
      <div>
        <h2>Quiz header</h2>
        <p>Timer</p>
        <button>End quiz</button>
      </div>
      <div>
        <h3>Quiz body</h3>
        <div>
          <h4>Quiz content</h4>
          <Quiz quizObject={quizObject} />
        </div>
      </div>
      <div>
        <h3>Quiz footer</h3>
        <button>Next question</button>
      </div>
    </div>
  )
}
