import { useState } from "react";
import Quiz from "./Quiz";
import Finish from "./Finish";

export default function QuizContainer({ quizData, onRestart }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [selection, setSelection] = useState(null);
  const [score, setScore] = useState(1);
  const [alreadySelectedCorrectAnswer, setAlreadySelectedCorrectAnswer] =
    useState(false);

  function handleSelection(option) {
    if (alreadySelectedCorrectAnswer) return;

    const currentQuestion = quizData[questionNum];

    if (option === currentQuestion.correctAnswer) {
      // set states
      setSelection(true);
      setAlreadySelectedCorrectAnswer(true);
      setScore((prevScore) => prevScore * 5.75);

      // cooldown between questions
      setTimeout(() => {
        setSelection(null);
        setAlreadySelectedCorrectAnswer(false);
        setQuestionNum((prev) => {
          return prev + 1;
        });
      }, 3000);
    } else {
      setSelection(false);
      setScore((prevScore) => prevScore / 1.75);
    }
  }

  function restart() {
    setScore(1);
    setSelection(null);
    setQuestionNum(0);
    setAlreadySelectedCorrectAnswer(false);
    onRestart();
  }

  function handleTimerIsUp() {
    setSelection(null);
    setAlreadySelectedCorrectAnswer(false);
    setQuestionNum((prev) => {
      return prev + 1;
    });
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        {questionNum >= quizData.length ? (
          <Finish score={Math.ceil(score)} restart={restart} />
        ) : (
          <Quiz
            quizData={quizData}
            num={questionNum}
            hasFoundAnswer={alreadySelectedCorrectAnswer}
            selection={selection}
            handleSelection={handleSelection}
            handleTimerIsUp={handleTimerIsUp}
          />
        )}
      </div>
      {questionNum < quizData.length ? (
        <p className="text-2xl text-custom1 bg-custom5 px-6 pt-3 pb-1 rounded-md drop-shadow-sm">
          Your score: {Math.ceil(score)}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
