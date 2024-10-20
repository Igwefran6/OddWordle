import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";

function Share() {
  return (
    <MainLayout>
      <div className=" flex justify-center items-center flex-col gap-4 h-full">
        <div className="w-[20rem] h-[20rem] shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl">
          Share your score, dare your friends and family and get extra play
          credit.
        </div>
        <Button label="Dare" onClick={() => {}} />
      </div>
    </MainLayout>
  );
}

export default Share;
