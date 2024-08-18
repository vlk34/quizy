import { useEffect, useState } from "react";

export default function Timer({ selection, handleTimerIsUp, num }) {
  const [timer, setTimer] = useState(10000);

  useEffect(() => {
    // if correct answer is selected stop timer
    if (selection || timer <= 0) {
      if (timer <= 0) {
        handleTimerIsUp();
      }
      return;
    }

    // update timer every sec
    const interval = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval); // clear the 1 second interval so that it doesnt overlap with other intervals
  }, [timer, selection]); // its dependent on both timer and  selection

  useEffect(() => {
    setTimer(10000);
  }, [num]);

  return (
    <span className="text-2xl text-custom1 mb-4">
      Timer: {Math.floor(timer / 1000)} seconds
    </span>
  );
}
