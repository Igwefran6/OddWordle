import Button from "../components/Button";
import useAppContext from "../hooks/useAppContext";
import MainLayout from "../layouts/MainLayout";

function Share() {
  const { state } = useAppContext();
  const { sharedToday } = state;
  return (
    <MainLayout>
      <div className=" flex justify-center items-center flex-col gap-4 h-full">
        <div className="mx-4 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl">
          {!sharedToday
            ? "Dare someone to beat your total score and get extra 100 play credit (100c)."
            : "Already dared today, come back tomorrow!"}
        </div>
        <Button label="Dare" disabled={sharedToday} onClick={() => {}} />
      </div>
    </MainLayout>
  );
}

export default Share;
