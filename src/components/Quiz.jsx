import Button from "./Button";
import Finish from "./Finish";

export default function Quiz({
  quizData,
  num,
  hasFoundAnswer,
  selection,
  handleSelection,
}) {
  return (
    <section className="flex flex-col items-center text-custom1 w-full">
      <div>
        <h2 className="text-2xl text-custom2">Question #{num + 1}</h2>
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
