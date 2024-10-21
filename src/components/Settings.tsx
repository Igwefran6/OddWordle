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
  const { difficulty, attemptType } = state; // Get difficulty and attemptType from context

  // Explicitly type selectedAttemptType as 5 | 10
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);
  const [selectedAttemptType, setSelectedAttemptType] = useState<5 | 10>(
    attemptType
  ); // Type for attempt type

  // Handle slider input change for difficulty
  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDifficulty = Number(event.target.value); // Ensure value is a number
    dispatch({ type: "SET_DIFFICULTY", payload: newDifficulty });
    setSelectedDifficulty(newDifficulty);
  };

  // Handle radio input change for attempt type
  const handleAttemptTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newAttemptType = event.target.value === "5" ? 5 : 10; // Type it strictly as 5 or 10
    setSelectedAttemptType(newAttemptType);
    dispatch({ type: "SET_ATTEMPT_TYPE", payload: newAttemptType });
  };

  // Handle save button click to apply changes
  const handleSave = () => {
    dispatch({ type: "SET_ATTEMPTS", payload: 1 });
    dispatch({ type: "SET_CORRECT", payload: 0 });
    resetRefetch();
    setSettingsVisible(false); // Close settings modal after saving
  };

  // Handle reset button click
  const handleReset = () => {
    if (confirm("Everything will be wiped out. Do you want to proceed?")) {
      localStorage.clear();
      location.reload();
    }
    setSettingsVisible(false);
  };

  return (
    <div
      className={
        `absolute w-64 top-24 right-6 bg-slate-800 p-4 text-white transition-all ` +
        (settingsVisible ? "translate-y-0" : "translate-y-[100svh]")
      }
    >
      {/* Difficulty Section */}
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

      {/* Attempt Type Section */}
      <div className="mt-4">TYPE</div>
      <div className="flex flex-col">
        <label>
          <input
            type="radio"
            value="5"
            checked={selectedAttemptType === 5}
            onChange={handleAttemptTypeChange}
          />
          <span className="ml-1">5 Attempts</span>
        </label>
        <label>
          <input
            type="radio"
            value="10"
            checked={selectedAttemptType === 10}
            onChange={handleAttemptTypeChange}
          />
          <span className="ml-1">10 Attempts</span>
        </label>
      </div>

      {/* Save and Reset buttons */}
      <div className="mt-4 flex gap-2">
        <Button onClick={handleSave} label="SAVE" />
        <Button onClick={handleReset} label="RESET" />
      </div>
    </div>
  );
}

export default Settings;
