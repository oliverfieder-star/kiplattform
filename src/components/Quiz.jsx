import { useState } from 'react'

export default function Quiz({ questions, onPassed }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = questions.every((_, i) => answers[i] !== undefined)
  const correctCount = questions.filter((q, i) => answers[i] === q.answer).length
  const passed = correctCount === questions.length

  const submit = () => {
    setSubmitted(true)
    if (passed) onPassed?.()
  }

  // Retry keeps already-correct answers so learners only redo what they missed.
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
          <p className="font-semibold text-white" id={`q-${qi}`}>
            {qi + 1}. {q.question}
          </p>
          <div className="mt-3 space-y-2" role="radiogroup" aria-labelledby={`q-${qi}`}>
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi
              const isCorrect = oi === q.answer
              let cls = 'border-white/10 bg-white/5 hover:bg-white/10'
              if (submitted) {
                if (isCorrect) cls = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200'
                else if (selected) cls = 'border-red-500/50 bg-red-500/10 text-red-200'
                else cls = 'border-white/10 bg-white/5 opacity-70'
              } else if (selected) {
                cls = 'border-brand-400/60 bg-brand-500/10 text-white'
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
            <p className="mt-2 text-sm text-slate-400">
              <span className="font-medium text-slate-300">Erklärung: </span>
              {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button onClick={submit} disabled={!allAnswered} className="btn-primary">
          Antworten prüfen
        </button>
      ) : (
        <div
          className={`rounded-xl border p-4 ${
            passed
              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
              : 'border-amber-500/40 bg-amber-500/10 text-amber-200'
          }`}
        >
          <p className="font-semibold">
            {passed
              ? `Perfekt – ${correctCount}/${questions.length} richtig!`
              : `${correctCount}/${questions.length} richtig. Fast!`}
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
