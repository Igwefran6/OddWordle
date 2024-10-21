import useAppContext from "../hooks/useAppContext";
import Button from "./Button";

interface AlertBoxProps {
  alertboxVisible: boolean;
  handleContinue: () => void;
  handleRestart: () => void;
  creditReward: number;
  scoreReward: number;
}

function AlertBox({
  alertboxVisible,
  handleContinue,
  handleRestart,
  creditReward,
  scoreReward,
}: AlertBoxProps) {
  const { state } = useAppContext();
  const { userSetWord, word, attempts, attemptType, correct } = state;
  const lable = attempts === attemptType ? "New Game" : "Continue";
  return (
    <div
      className={
        `h-svh w-svw fixed top-0 ` + (alertboxVisible ? "block" : "hidden")
      }
    >
      <div
        className={
          `absolute min-w-64 min-h-48 top-1/2 right-1/2  translate-x-1/2 border bg-slate-800 p-4 text-white transition-all flex justify-between flex-col ` +
          (alertboxVisible ? "-translate-y-1/2" : "translate-y-[100svh]")
        }
      >
        {attempts === attemptType ? (
          <div className="absolute -top-8 right-1/2 translate-x-1/2 bg-slate-800 z-10 px-4 text-xl border text-slate-200 text-nowrap">
            Game Completed
          </div>
        ) : (
          ""
        )}
        {attempts === attemptType ? (
          <button className="absolute -bottom-9 right-1/2 translate-x-1/2 bg-slate-900 z-10 px-4 text-xl border text-slate-200 text-nowrap active:scale-95">
            Share score!
          </button>
        ) : (
          ""
        )}
        <div className="z-20">
          <span>
            {word === userSetWord.join("") ? "Correct " : "Wrong "}answer!
          </span>
          <div>
            <span className="font-bold underline cursor-pointer relative group active:95">
              <span className="absolute bg-black bottom-5 px-2 text-sm font-thin w-36 hidden group-hover:block">
                Click to look up word
              </span>
              <span className="group-active:scale-90 inline-block animate-pulse">
                {" "}
                {word.toUpperCase()}
              </span>
            </span>{" "}
            is the word
          </div>
          <hr className="w-48 opacity-50" />
          <div className="">
            Answered:{" "}
            <span className="font-bold">{`${attempts}/${attemptType}`}</span>
          </div>
          <div className="">
            Correct:{" "}
            <span className="font-bold">{`${correct}/${attemptType}`}</span>
          </div>{" "}
          <hr className="w-36 opacity-50" />
          <div className="">
            Score: <span className="font-bold">{`+${scoreReward} points`}</span>
          </div>
          <div className="">
            Reward: <span className="font-bold">{`+${creditReward}c`}</span>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <Button label="Restart" onClick={handleRestart} />
          <Button label={lable} onClick={handleContinue} />
        </div>
      </div>
    </div>
  );
}

export default AlertBox;
