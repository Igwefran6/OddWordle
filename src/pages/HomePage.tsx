import { useEffect, useState } from "react";
import WordBoard from "../components/WordBoard";
import MainLayout from "../layouts/MainLayout";
import AnswerBox from "../components/AnswerBox";
import Button from "../components/Button";
import SettingsButton from "../components/SettingsButton";
import HUD from "../components/HUD";
import Settings from "../components/Settings";
import shuffleAndScramble from "../utils/shuffleAndScramble";
import AlertBox from "../components/AlertBox";
import { isArrayFilled } from "../utils/isArrayFilled";
import useAppContext from "../hooks/useAppContext";
import { getRandomIndices } from "../utils/getRandomIndices";

function HomePage() {
  const { state, dispatch } = useAppContext();
  const {
    word,
    difficulty,
    attempts,
    userSetWord,
    initialUserSetWord,
    avoidResetUserSetWord,
  } = state;

  const [settingsVisible, setSettingsVisible] = useState(false);
  const [alertboxVisible, setAlertboxVisible] = useState(false);

  const hintCount = 2;

  // Fetch a new word based on the difficulty level and ensure it's processed before dispatching
  async function GetNewWord() {
    const url = `http://localhost:3000/api/words/length/${difficulty}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error: 404 cannot get");
    }
    const newWordData = await response.json();

    // Dispatch word first, and only after that process userSetWord
    dispatch({ type: "SET_WORD", payload: newWordData.word });

    // Ensure `userSetWord` is updated only after the new word is set
    const scrambledArray = shuffleAndScramble({ word: newWordData.word });
    dispatch({ type: "UPDATE_ARRAY", payload: scrambledArray });

    // Now, manage hints based on the new word
    handleHints(newWordData.word);
  }

  function resetRefetch() {
    // Clear the state when difficulty changes
    dispatch({
      type: "SET_USER_SET_WORD",
      payload: Array(difficulty).fill(""),
    });

    // Fetch a new word whenever difficulty changes
    GetNewWord();
  }

  function handleHints(word: string) {
    const newUserSetWord = Array(difficulty).fill("");
    const randomIndices = getRandomIndices(hintCount, difficulty);

    randomIndices.forEach((index: any) => {
      newUserSetWord[index] = word[index];
    });

    // Update userSetWord and related state only after word is fully set
    dispatch({ type: "SET_USER_SET_WORD", payload: newUserSetWord });
    dispatch({ type: "SET_INITIAL_USER_SET_WORD", payload: newUserSetWord });
    dispatch({
      type: "SET_AVOID_RESET_INITIAL_USER_SET_WORD",
      payload: newUserSetWord,
    });
  }

  useEffect(() => {
    dispatch({
      type: "CLICKED_INDICES",
      payload: [],
    });
  }, []);

  // Effect for initial setup of userSetWord and fetching new word
  useEffect(() => {
    if (avoidResetUserSetWord.length > 0) {
      // If avoidResetUserSetWord has values, restore the userSetWord state
      dispatch({ type: "SET_USER_SET_WORD", payload: avoidResetUserSetWord });
      dispatch({
        type: "SET_INITIAL_USER_SET_WORD",
        payload: avoidResetUserSetWord,
      });
    } else {
      // If no avoidResetUserSetWord, reset to empty array and fetch new word
      dispatch({
        type: "SET_USER_SET_WORD",
        payload: Array(difficulty).fill(""),
      });

      if (!word) {
        GetNewWord(); // Fetch word only if it's not already set
      } else {
        handleHints(word); // Ensure hints are applied if word already exists
      }
    }
  }, [difficulty]); // Re-run when difficulty changes

  function handleCheck() {
    if (isArrayFilled(userSetWord)) {
      setAlertboxVisible(true);
    } else {
      alert("Please complete the answer box!");
    }
  }

  function handleClear() {
    dispatch({ type: "SET_USER_SET_WORD", payload: [...initialUserSetWord] });
    dispatch({ type: "CLICKED_INDICES", payload: [] });
    console.log(state);
    dispatch({ type: "SET_DIFFICULTY", payload: 6 });
  }

  function handleContinue() {
    dispatch({ type: "SET_ATTEMPTS", payload: attempts + 1 });
    setAlertboxVisible(false);
    dispatch({ type: "CLICKED_INDICES", payload: [] });
    GetNewWord();
    dispatch({ type: "SET_AVOID_RESET_INITIAL_USER_SET_WORD", payload: [] });
  }

  function handleRestart() {}

  return (
    <MainLayout>
      <div className="flex flex-col h-full flex-1 justify-center items-center">
        <AnswerBox />
        <WordBoard />
        <div className="flex gap-4">
          <Button onClick={handleCheck} label="Check" />
          <Button onClick={handleClear} label="Clear" />
        </div>
      </div>
      <SettingsButton onClick={() => setSettingsVisible((prev) => !prev)} />
      <Settings
        settingsVisible={settingsVisible}
        setSettingsVisible={setSettingsVisible}
        resetRefetch={resetRefetch}
      />
      <HUD />
      <AlertBox
        word={word}
        userSetWord={userSetWord}
        alertboxVisible={alertboxVisible}
        handleContinue={handleContinue}
        handleRestart={handleRestart}
      />
    </MainLayout>
  );
}

export default HomePage;
