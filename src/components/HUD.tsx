import useAppContext from "../hooks/useAppContext";
import { wordFormatter } from "../utils/WordFormatter";

function HUD() {
  const { state } = useAppContext();
  const { achivements, credits } = state;

  return (
    <div className="absolute h-fit w-fit bottom-6 right-1/2 translate-x-1/2 lg:top-6 lg:right-24 lg:translate-x-0 p-4 bg-slate-800 flex gap-2">
      <p className="text-white font-semibold text-nowrap">
        Total score:{" "}
        <span className="font-normal">
          {wordFormatter(achivements.totalScore)}
        </span>
      </p>
      <p className="text-white font-semibold text-nowrap">
        Credits: <span className="font-normal">{wordFormatter(credits)}</span>
      </p>
    </div>
  );
}

export default HUD;
