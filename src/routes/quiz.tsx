import { createFileRoute } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import Quiz from '#/components/Quiz'

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
})

function RouteComponent() {
  const question = "Domanda provafjdlkjfklasjflkjsdakfjkldasjfklas"
  const options = [{
    optionText: "Option text 1", optionId: "Id1", optionValue: "1"
  }, {
    optionText: "Option text 2", optionId: "Id2", optionValue: "2"
  }, {
    optionText: "Option text 3", optionId: "Id3", optionValue: "3"
  }]

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
          <Quiz question={question} options={options} />
        </div>
      </div>
      <div>
        <h3>Quiz footer</h3>
        <button>Next question</button>
      </div>
    </div>
  )
}
