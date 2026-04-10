import { createFileRoute } from '@tanstack/react-router'
import { db } from '#/db/initDb'
import { useForm } from '@tanstack/react-form'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const form = useForm({
    defaultValues: {
      username: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

  return (
    <main className="">
      <form
        onSubmit={(e) => {
          e.stopPropagation()
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field
          name='username'
          children={(field) => {
            return (
              <input type='text' name='username' id='username' onChange={(e) => {
                field.handleChange(e.target.value)
              }} />
            )
          }}
        ></form.Field>
      </form>
    </main>
  )
}
