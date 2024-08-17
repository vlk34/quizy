export default function Welcome({ onStart }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl text-custom2 mb-8 text-center">
        Welcome to Quizy!
      </h1>
      <button
        onClick={onStart}
        className="drop-shadow-xl mb-16 rounded-lg px-8 pt-4 py-3 text-2xl bg-custom3 hover:bg-custom2  text-custom1 transition-colors duration-300 ease-in-out"
      >
        Start Quiz
      </button>
    </div>
  );
}
