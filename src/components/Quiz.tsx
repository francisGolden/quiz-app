import { useForm } from '@tanstack/react-form'
import type { QuizProps } from '#/types/QuizTypes'


export default function Quiz({ quizObject }: { quizObject: QuizProps }) {
  const {question, options, correctAnswer} = quizObject
  const form = useForm({
    defaultValues: {
      selectedOption: '',
    },
    onSubmit: async ({ value }) => {
      console.log(correctAnswer === value.selectedOption)
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
              </>
            )
          }}
        ></form.Field>
        <button type="submit">Invia</button>
      </form>
    </>
  )
}
