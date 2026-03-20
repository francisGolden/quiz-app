import { createFileRoute } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
})

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      esempio: '',
      selectOption: '',
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
              name="selectOption"
              children={(field) => {
                return (
                  <>
                    <div>
                      Question here Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Dolorem recusandae vel officiis totam
                      magnam commodi laborum maxime dolor eligendi, animi
                      delectus. Quidem aperiam nobis sunt rerum consequatur
                      incidunt odio cumque.
                    </div>
                    <div>
                      <input
                        type="radio"
                        name={field.name}
                        id={field.name}
                        value="ciao"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <label htmlFor="ciao">Ciao</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name={field.name}
                        id={field.name}
                        value="peppa"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <label htmlFor="peppa">Peppa</label>
                    </div>
                  </>
                )
              }}
            ></form.Field>
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
