import { useEffect, useRef, useState } from 'react'
import { quizQuestions } from '../data/quiz.js'

const LETTERS = ['A', 'B', 'C', 'D']

function getResultMessage(score, total) {
  const ratio = score / total
  if (ratio === 1) return 'Tuyệt vời! Bạn là một chuyên gia thực thụ về loài mèo.'
  if (ratio >= 0.75) return 'Rất tốt! Bạn hiểu khá nhiều về loài mèo.'
  if (ratio >= 0.5) return 'Khá ổn! Hãy thử lại để cải thiện điểm số nhé.'
  return 'Bạn đã có một khởi đầu tốt. Hãy thử lại để khám phá thêm về loài mèo nhé.'
}

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const nextRef = useRef(null)
  const resultRef = useRef(null)

  const total = quizQuestions.length
  const question = quizQuestions[current]
  const answered = selected !== null
  const isCorrect = answered && selected === question.answer
  const isLast = current === total - 1

  // Sau khi chọn đáp án, chuyển tiêu điểm tới nút tiếp theo để người dùng bàn phím đi tiếp dễ hơn.
  useEffect(() => {
    if (answered) nextRef.current?.focus()
  }, [answered])

  useEffect(() => {
    if (finished) resultRef.current?.focus()
  }, [finished])

  const handleSelect = (index) => {
    if (answered) return
    setSelected(index)
    if (index === question.answer) setScore((value) => value + 1)
  }

  const handleNext = () => {
    if (isLast) {
      setFinished(true)
      return
    }
    setCurrent((value) => value + 1)
    setSelected(null)
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  return (
    <section className="quiz" id="quiz" aria-labelledby="quiz-title">
      <div className="quiz__heading">
        <div>
          <h2 id="quiz-title" className="quiz__title">
            Đố vui về loài mèo
          </h2>
          <p className="quiz__intro">Thử sức với {total} câu hỏi trắc nghiệm về các chú mèo.</p>
        </div>
        {!finished && (
          <p className="quiz__score" aria-live="polite">
            Điểm: <strong>{score}</strong>
          </p>
        )}
      </div>

      {finished ? (
        <div className="quiz__result">
          <h3 className="quiz__result-title" tabIndex={-1} ref={resultRef}>
            Kết quả của bạn
          </h3>
          <p className="quiz__result-score">
            <strong>{score}</strong> / {total}
          </p>
          <p>{getResultMessage(score, total)}</p>
          <button type="button" className="button" onClick={handleRestart}>
            Làm lại
          </button>
        </div>
      ) : (
        <div className="quiz__body" key={question.id}>
          <div className="quiz__progress">
            <span>
              Câu {current + 1} trên {total}
            </span>
            <span className="quiz__topic">{question.topic}</span>
          </div>
          <div
            className="quiz__bar"
            role="progressbar"
            aria-label="Tiến độ làm bài"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={current + (answered ? 1 : 0)}
          >
            <div className="quiz__bar-fill" style={{ width: `${((current + (answered ? 1 : 0)) / total) * 100}%` }} />
          </div>

          <h3 className="quiz__question">{question.question}</h3>

          <ul className="quiz__options">
            {question.options.map((option, index) => {
              let state = ''
              if (answered) {
                if (index === question.answer) state = ' quiz__option--correct'
                else if (index === selected) state = ' quiz__option--wrong'
                else state = ' quiz__option--muted'
              }
              return (
                <li key={option}>
                  <button
                    type="button"
                    className={`quiz__option${state}`}
                    aria-disabled={answered}
                    onClick={() => handleSelect(index)}
                  >
                    <span className="quiz__letter" aria-hidden="true">
                      {LETTERS[index]}
                    </span>
                    <span className="quiz__option-text">{option}</span>
                    {answered && index === question.answer && <span className="quiz__mark">Đúng</span>}
                    {answered && index === selected && index !== question.answer && (
                      <span className="quiz__mark">Chưa đúng</span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="quiz__feedback" aria-live="polite">
            {answered && (
              <>
                <p className={`quiz__verdict${isCorrect ? ' quiz__verdict--correct' : ' quiz__verdict--wrong'}`}>
                  {isCorrect ? 'Chính xác!' : `Chưa đúng. Đáp án đúng là ${LETTERS[question.answer]}.`}
                </p>
                <p className="quiz__explanation">{question.explanation}</p>
              </>
            )}
          </div>

          {answered && (
            <button type="button" className="button" onClick={handleNext} ref={nextRef}>
              {isLast ? 'Xem kết quả' : 'Câu tiếp theo'}
            </button>
          )}
        </div>
      )}
    </section>
  )
}
