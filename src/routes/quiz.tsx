import { createFileRoute } from '@tanstack/react-router'
import Quiz from '#/components/Quiz'
import { db } from '#/db/initDb'

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log(db.data)
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
          <Quiz quizObject={db.data.quizList[0]} />
        </div>
      </div>
      <div>
        <h3>Quiz footer</h3>
        <button>Next question</button>
      </div>
    </div>
  )
}
