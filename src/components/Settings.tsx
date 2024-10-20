import { Dispatch, SetStateAction, useState } from "react";
import useAppContext from "../hooks/useAppContext";
import Button from "./Button";

function Settings({
  settingsVisible,
  setSettingsVisible,
  resetRefetch,
}: {
  settingsVisible: boolean;
  setSettingsVisible: Dispatch<SetStateAction<boolean>>;
  resetRefetch: () => void;
}) {
  const { state, dispatch } = useAppContext();
  const { difficulty } = state;

  // Local state to hold the selected difficulty
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);

  // Handle slider input change and update the local state
  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDifficulty = parseInt(event.target.value);
    dispatch({ type: "SET_DIFFICULTY", payload: newDifficulty });
    setSelectedDifficulty(newDifficulty);
  };

  // Handle save button click to update difficulty in the global state (context)
  const handleSave = () => {
    setSettingsVisible(false);
    resetRefetch();
  };

  return (
    <div
      className={
        `absolute w-64 top-24 right-6 bg-slate-800 p-4 text-white transition-all ` +
        (settingsVisible ? "translate-y-0" : "translate-y-[100svh]")
      }
    >
      <div>DIFFICULTY</div>
      <input
        type="range"
        min={4}
        max={12}
        value={selectedDifficulty}
        onChange={handleDifficultyChange}
        className="w-full mt-2"
      />
      <div className="text-center mt-2">{selectedDifficulty}</div>

      <div className="mt-4">
        <Button onClick={handleSave} label="SAVE" />
      </div>
    </div>
  );
}

export default Settings;
