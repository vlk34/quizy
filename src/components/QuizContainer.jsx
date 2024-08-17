import { useState } from "react";
import Quiz from "./Quiz";
import Finish from "./Finish";

// #1 after all questions finish we try reading undefined and crash, we should give the score and say restart?
// #2 if you click multiple times multiple timeouts get called and you skip that many questions. (kind of done i guess it works)
let alreadySelectedCorrectAnswer = false;

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
      setSelection(true);
      setAlreadySelectedCorrectAnswer(true);
      setScore((prevScore) => prevScore * 5.75);

      setTimeout(() => {
        setSelection(null);
        setAlreadySelectedCorrectAnswer(false);
        setQuestionNum((prev) => {
          const nextQuestionNum = prev + 1;
          if (nextQuestionNum >= quizData.length) {
            return prev + 1;
          }
          return nextQuestionNum;
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

  console.log(questionNum);

  return (
    <div className="flex flex-col items-center">
      {questionNum >= quizData.length ? (
        <Finish score={Math.ceil(score)} restart={restart} />
      ) : (
        <Quiz
          quizData={quizData}
          num={questionNum}
          hasFoundAnswer={alreadySelectedCorrectAnswer}
          selection={selection}
          handleSelection={handleSelection}
        />
      )}
    </div>
  );
}
