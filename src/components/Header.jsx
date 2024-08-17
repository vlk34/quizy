import headerImg from "../assets/headerImg.png";

export default function Header() {
  return (
    <div className="flex flex-col items-center mt-24">
      <img
        src={headerImg}
        alt="question-list-icon"
        className="w-1/3 mb-8 ml-6 drop-shadow-xl"
      />
      <h1 className="text-4xl text-custom1 mb-10">Quizy</h1>
    </div>
  );
}
