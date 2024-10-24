import MainLayout from "../layouts/MainLayout";

function HowToPlay() {
  return (
    <MainLayout>
      <div className=" flex p-12 flex-col gap-4 min-h-[calc(100svh-5rem)] mb-12">
        <div className="mx-4 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl lg:w-[75%]">
          1. Click on the right alphabet character to fill the answer box. The
          one with hints.
        </div>
        <div className="mx-4 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl lg:w-[75%]">
          2. Once the boxes are filled and you're confident in the spelling,
          click the check button to check.
        </div>
        <div className="mx-4 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl lg:w-[75%]">
          3. Use the clear to clear the box if you made any mistake.
        </div>
        <div className="mx-4 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl lg:w-[75%]">
          4. The goal is to get your total score as high as possible while
          maintaining your play credit.
        </div>{" "}
        <div className="mx-4 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl lg:w-[75%]">
          5. Use the settings to adjust difficulty. The higher the difficulty
          the more score and credits are rewarded. PS: By higher difficulty
          means the number of characters.
        </div>
        <div className="mx-4 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl lg:w-[75%]">
          6. Each new game costs play credit, the higher the set difficulty, the
          more the cost to play a new game.
        </div>
        <div className="mx-4 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl lg:w-[75%]">
          7. Ways to earn play credit includes: Earn 100 play credits per day
          when checked in. From game play or daily dare. Posting your score on
          leaderboard earns you 100, this can be done once per day.
        </div>
      </div>
    </MainLayout>
  );
}

export default HowToPlay;
