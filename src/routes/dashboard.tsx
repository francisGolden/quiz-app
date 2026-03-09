import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <p>User: Francesco</p>
      <div>
        <h3>My questions</h3>
        <p>Test type: x. available questions: y</p>
      </div>
      <div>
        <p>Practice history</p>
        <div>
          <h3>Practice list</h3>
          <ul>
            <li>Practice #1</li>
            <li>Practice #2</li>
            <li>Practice #2</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Statistics</h3>
        <p>Chart</p>
      </div>
      <div>
        <h3>Quiz Practice</h3>
        <button>Start practice. Select the questions from your question quota</button>
        <h4>Compose your test</h4>
        <form action=""></form>
        <p>Form placeholder</p>
      </div>
    </div>
  )
}
