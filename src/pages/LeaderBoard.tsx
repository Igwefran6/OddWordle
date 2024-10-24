import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import { ChangeEvent, useState } from "react";
import useAppContext from "../hooks/useAppContext";

const LeaderBoard = () => {
  const [player, setPlayer] = useState("");
  const { state } = useAppContext();
  const players = [
    { name: "max83", totalScore: 10234, highestScore: 764 },
    { name: "sarah44", totalScore: 10215, highestScore: 758 },
    { name: "johnDoe", totalScore: 10192, highestScore: 745 },
    { name: "lily77", totalScore: 10157, highestScore: 739 },
    { name: "alexKing", totalScore: 10129, highestScore: 732 },
    { name: "mike19", totalScore: 10102, highestScore: 726 },
    { name: "ninaX", totalScore: 10087, highestScore: 721 },
    { name: "steveO", totalScore: 10064, highestScore: 915 },
    { name: "rachel92", totalScore: 10038, highestScore: 708 },
    { name: "logan22", totalScore: 10023, highestScore: 705 },
    { name: "bradly32", totalScore: 10010, highestScore: 302 },
    { name: "jane_doe", totalScore: 9998, highestScore: 698 },
    { name: "mark47", totalScore: 9985, highestScore: 692 },
    { name: "lucy_v", totalScore: 9967, highestScore: 788 },
    { name: "robertC", totalScore: 9945, highestScore: 682 },
    { name: "emma36", totalScore: 9923, highestScore: 677 },
    { name: "danny_boy", totalScore: 9904, highestScore: 273 },
    { name: "julia57", totalScore: 9887, highestScore: 668 },
    { name: "nick99", totalScore: 9872, highestScore: 662 },
    { name: "oliver_t", totalScore: 9856, highestScore: 657 },
    { name: "peter_park", totalScore: 9831, highestScore: 649 },
    { name: "amy88", totalScore: 9817, highestScore: 645 },
    { name: "george_11", totalScore: 9795, highestScore: 640 },
    { name: "harry66", totalScore: 9772, highestScore: 634 },
    { name: "sophia_rose", totalScore: 9754, highestScore: 628 },
  ];

  function sendScore(): void {
    if (player.length < 4 || player.length > 8 || player.includes(" ")) {
      alert("Player name must be between 4-8 characters, no spaces.");
    } else if (state.totalScore < 1000) {
      alert("Total score must be greater than 1,000!");
    } else {
      alert("Good!");
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setPlayer(event.target.value);
  }

  return (
    <MainLayout>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Number</th>
              <th className="py-3 px-6 text-left">Player</th>
              <th className="py-3 px-6 text-left">Total Score</th>
              <th className="py-3 px-6 text-left">Highest Score</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {players.map((player, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="py-3 px-6 text-left">{player.name}</td>
                <td className="py-3 px-6 text-left">
                  {player.totalScore.toLocaleString()}
                </td>
                <td className="py-3 px-6 text-left">
                  {player.highestScore.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="fixed bottom-24 right-4 bg-slate-900 opacity-70 p-4 text-white">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={player}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-slate-900 font-bold"
              placeholder="Player name"
            />
          </div>
          <div>Total score: 23481</div>
          <div>Highest score: 4521</div>
        </div>
        <div className="fixed bottom-12 right-4">
          <Button label="Post yours" onClick={sendScore} />
        </div>
      </div>
    </MainLayout>
  );
};

export default LeaderBoard;
