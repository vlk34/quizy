export default function Button({ text, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="text-custom5 text-2xl px-8 pt-4 pb-3 drop-shadow-xl bg-custom2 w-full text-center mb-4 rounded-md hover:bg-custom1 transition-colors duration-200 ease-in-out"
    >
      {text}
    </button>
  );
}
