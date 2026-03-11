import { createFileRoute } from '@tanstack/react-router'
import {createFormHook, createFormHookContexts} from "@tanstack/react-form"

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
})

function RouteComponent() {
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
            <div>Placeholder</div>
        </div>
      </div>
      <div>
        <h3>Quiz footer</h3>
        <button>Next question</button>
      </div>
    </div>
  )
}
