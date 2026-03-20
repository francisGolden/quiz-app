import { useForm } from '@tanstack/react-form'

interface QuizProps {
  question: string;
  options: { optionText: string; optionId: string; optionValue: string }[];
  correctAnswer?: string;
  explanation?: string;
}

export default function Quiz({ question, options }: QuizProps) {
  const form = useForm({
    defaultValues: {
      selectedOption: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })
  return (
    <>
      <form
        onSubmit={(e) => {
          e.stopPropagation()
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field
          name="selectedOption"
          children={(field) => {
            return (
              <>
                <div>{question}</div>
                {options.map(({ optionId, optionText, optionValue }) => {
                  return (
                    <div key={optionId}>
                      <input
                        type="radio"
                        name={optionId}
                        id={optionId}
                        value={optionValue}
                        onChange={(e) => {
                            console.log("changed value to", e.target.value)
                            field.handleChange(e.target.value)
                        }}
                        checked={field.state.value === optionValue}
                      />
                      <label htmlFor={optionId}>{optionText}</label>
                    </div>
                  )
                })}
                {/* <div>
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
                </div> */}
              </>
            )
          }}
        ></form.Field>
        <button type="submit">Invia</button>
      </form>
    </>
  )
}
