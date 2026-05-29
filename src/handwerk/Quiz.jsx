import { useState } from 'react'

// Light-theme quiz used inside the Handwerk variant.
export default function HandwerkQuiz({ questions }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = questions.every((_, i) => answers[i] !== undefined)
  const correct = questions.filter((q, i) => answers[i] === q.answer).length
  const passed = correct === questions.length

  const retry = () => {
    const kept = {}
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) kept[i] = answers[i]
    })
    setAnswers(kept)
    setSubmitted(false)
  }

  return (
    <div className="space-y-6">
      {questions.map((q, qi) => (
        <div key={qi}>
          <p className="font-semibold text-slate-900" id={`hq-${qi}`}>
            {qi + 1}. {q.question}
          </p>
          <div className="mt-3 space-y-2" role="radiogroup" aria-labelledby={`hq-${qi}`}>
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi
              const isCorrect = oi === q.answer
              let cls = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
              if (submitted) {
                if (isCorrect) cls = 'border-emerald-300 bg-emerald-50 text-emerald-900'
                else if (selected) cls = 'border-red-300 bg-red-50 text-red-900'
                else cls = 'border-slate-200 bg-white text-slate-500 opacity-80'
              } else if (selected) {
                cls = 'border-orange-400 bg-orange-50 text-slate-900'
              }
              return (
                <button
                  key={oi}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  disabled={submitted}
                  onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${cls}`}
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current text-[10px]">
                    {String.fromCharCode(65 + oi)}
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>
          {submitted && (
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-medium text-slate-800">Erklärung: </span>
              {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button onClick={() => setSubmitted(true)} disabled={!allAnswered} className="hw-btn-primary">
          Antworten prüfen
        </button>
      ) : (
        <div
          className={`rounded-xl border p-4 ${
            passed
              ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
              : 'border-amber-300 bg-amber-50 text-amber-900'
          }`}
        >
          <p className="font-semibold">
            {passed
              ? `Top – ${correct}/${questions.length} richtig!`
              : `${correct}/${questions.length} richtig. Schau dir die Erklärungen an.`}
          </p>
          {!passed && (
            <button onClick={retry} className="mt-2 text-sm font-medium underline">
              Falsche Antworten erneut versuchen
            </button>
          )}
        </div>
      )}
    </div>
  )
}
