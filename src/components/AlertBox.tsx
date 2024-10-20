import Button from "./Button";

interface AlertBoxProps {
  word: string;
  userSetWord: string[];
  alertboxVisible: boolean;
  handleContinue: () => void;
  handleRestart: () => void;
}

function AlertBox({
  word,
  userSetWord,
  alertboxVisible,
  handleContinue,
  handleRestart,
}: AlertBoxProps) {
  return (
    <div
      className={
        `absolute min-w-64 min-h-48 top-1/2 right-1/2  translate-x-1/2 border bg-slate-800 p-4 text-white transition-all flex justify-between flex-col ` +
        (alertboxVisible ? "-translate-y-1/2" : "translate-y-[100svh]")
      }
    >
      <div>
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
          Answered: <span className="font-bold">06/10</span>
        </div>
        <div className="">
          Correct: <span className="font-bold">04/10</span>
        </div>{" "}
        <hr className="w-36 opacity-50" />
        <div className="">
          Reward: <span className="font-bold">+10 points</span>
        </div>
        <div className="">
          Reward: <span className="font-bold">+2c</span>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <Button label="Restart" onClick={handleRestart} />
        <Button label="Continue" onClick={handleContinue} />
      </div>
    </div>
  );
}

export default AlertBox;
