export default function Finish({ score, restart }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl text-custom2 mb-8 text-center">Game Finished!</h1>
      <p className="w-3/4 drop-shadow-xl mb-8 rounded-lg px-8 pt-4 py-3 text-2xl bg-custom5 text-custom1 text-center">
        Your score: {score}
      </p>
      <button
        onClick={restart}
        className="w-1/2 drop-shadow-xl mb-16 rounded-lg px-6 pt-3 py-2 text-xl bg-custom3 hover:bg-custom2  text-custom1 transition-colors duration-300 ease-in-out"
      >
        Restart!
      </button>
    </div>
  );
}
