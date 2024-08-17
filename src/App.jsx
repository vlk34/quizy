import Header from "./components/Header";
import QuizContainer from "./components/QuizContainer";
import Welcome from "./components/Welcome";
import quizData from "./assets/quizData";
import { useState } from "react";

// add a timer to each question
// maybe display score realtime
// make the correct answer green when selected, it overlaps with the hover effect

function App() {
  const [playerState, setPlayerState] = useState("starting");

  function startQuiz() {
    setPlayerState("started");
  }

  function handleRestart() {
    setPlayerState("starting");
  }

  return (
    <div className="flex flex-col max-w-md mx-auto items-center">
      <Header />
      {playerState === "starting" ? (
        <Welcome onStart={startQuiz} />
      ) : (
        <QuizContainer quizData={quizData} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
