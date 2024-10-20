import useAppContext from "../hooks/useAppContext";

function AnswerBox() {
  const { state } = useAppContext();
  const { userSetWord } = state;

  return (
    <div className=" bg-slate-600 p-1 sm:text-3xl md:text-2xl lg:text-2xl font-black text-white flex justify-center items-center">
      {userSetWord &&
        userSetWord.map((element, index) => (
          <span
            key={index}
            className="bg-slate-700 h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 border border-slate-500 grid place-content-center"
          >
            {element.toUpperCase()}
          </span>
        ))}
    </div>
  );
}

export default AnswerBox;
