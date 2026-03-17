import { createFileRoute } from '@tanstack/react-router'
import {
  useForm,
} from '@tanstack/react-form'

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
})

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      esempio: "",
      selectOption: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

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
          <form
            onSubmit={(e) => {
              e.stopPropagation()
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <form.Field
              name="esempio"
              children={(field) => {
                return (
                  <>
                    <label htmlFor={field.name}>Esempio label</label>
                    <input
                      type="text"
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </>
                )
              }}
            ></form.Field>
            <form.Field name='selectOption' children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Select label</label>
                  <select name={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)}>
                    <option value="">Select a value...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </>
              )
            }}></form.Field>
            <button type="submit">Invia</button>
          </form>
        </div>
      </div>
      <div>
        <h3>Quiz footer</h3>
        <button>Next question</button>
      </div>
    </div>
  )
}
