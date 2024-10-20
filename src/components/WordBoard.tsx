import { Key } from "react";
import { isArrayFilled } from "../utils/isArrayFilled";
import useAppContext from "../hooks/useAppContext";

function WordBoard() {
  const { state, dispatch } = useAppContext();
  const { array, clickedIndices, userSetWord } = state;
  const handleClick = (element: string, index: number) => {
    if (isArrayFilled(userSetWord)) {
      return;
    }

    dispatch({
      type: "CLICKED_INDICES",
      payload: clickedIndices.concat(index),
    });

    const nextEmptyIndex = userSetWord.findIndex((el) => el === "");
    if (nextEmptyIndex !== -1) {
      const updatedArray = [...userSetWord]; // Create a copy of the current state
      updatedArray[nextEmptyIndex] = element; // Set the clicked element in the first empty slot

      // Dispatch action to update userSetWord
      dispatch({
        type: "SET_USER_SET_WORD",
        payload: updatedArray,
      });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-2 p-4 w-fit">
        {array.map((element: string, index: Key) => (
          <button
            key={index}
            disabled={
              clickedIndices.includes(index as number) || element === ""
            } // Disable if clicked or element is empty
            onClick={() => handleClick(element, index as number)} // Ensure index is treated as a number
            className={`${
              element
                ? clickedIndices.includes(index as number)
                  ? "bg-slate-800 border border-red-500 cursor-not-allowed "
                  : "bg-slate-800 border border-slate-400 hover:scale-105 cursor-pointer active:scale-95"
                : "bg-slate-900 opacity-50 cursor-not-allowed"
            } h-12 w-12 flex items-center justify-center font-black capitalize text-2xl text-white transition-all `}
          >
            {element ? element : ""}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WordBoard;
