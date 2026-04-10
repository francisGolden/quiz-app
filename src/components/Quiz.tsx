import { useForm } from '@tanstack/react-form'
import type { QuizProps, AnswerList, Session } from '#/types/QuizTypes'
import { db } from '#/db/initDb'

const updateSessions = async (session: Session) => {
  db.update((data) => {
    data.recordedSessions.push(session)
  })
}


export default function Quiz({ quizObject }: { quizObject: QuizProps }) {
  const {question, options} = quizObject
  const sessionAnswers: AnswerList = []
  const form = useForm({
    defaultValues: {
      selectedOption: '',
    },
    onSubmit: async ({ value }) => {
      sessionAnswers.push({...quizObject, givenAnswer: value.selectedOption})
      const sessionDate = Date.now()
      const session: Session = {sessionAnswers, sessionDate}
      await updateSessions(session)
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
                {options.map(({ optionId, optionText }) => {
                  return (
                    <div key={optionId}>
                      <input
                        type="radio"
                        name={optionText}
                        id={optionId}
                        value={optionId}
                        onChange={(e) => {
                            console.log("changed value to", e.target.value)
                            field.handleChange(e.target.value)
                        }}
                        checked={field.state.value === optionId}
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
