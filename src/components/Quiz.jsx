import { useEffect, useState } from "react";
import Button from "./Button";
import Finish from "./Finish";

export default function Quiz({
  quizData,
  num,
  hasFoundAnswer,
  selection,
  handleSelection,
  handleTimerIsUp,
}) {
  const [timer, setTimer] = useState(11000);

  useEffect(() => {
    if (selection) {
      return;
    }

    if (timer <= 0) {
      handleTimerIsUp();
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTime) => prevTime - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [timer, selection]);

  useEffect(() => {
    setTimer(11000);
  }, [num]);

  return (
    <section className="flex flex-col items-center text-custom1 w-full">
      {!selection ? (
        <span className="text-2xl text-custom1 mb-4">
          Timer: {Math.floor(timer / 1000)} seconds
        </span>
      ) : (
        <></>
      )}
      <div>
        <h2 className="text-xl text-custom2">Question #{num + 1}</h2>
      </div>
      <div className="text-center text-4xl mb-8 w-full">
        <h2>{quizData[num].question}</h2>
      </div>
      <div className="flex flex-col items-center w-4/6 mb-4">
        {quizData[num].options.map((option, index) => (
          <Button
            key={index}
            text={option}
            onClick={() => handleSelection(option)}
            disabled={hasFoundAnswer}
          />
        ))}
      </div>
      {selection !== null && (
        <p
          className={`text-2xl ${
            selection ? `text-green-400` : `text-red-500`
          }`}
        >
          {selection
            ? `Correct! The answer was: ${quizData[num].correctAnswer}`
            : "Incorrect, try again."}
        </p>
      )}
    </section>
  );
}
