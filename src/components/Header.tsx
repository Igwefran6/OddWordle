import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-2 lg:px-0">
        <div className="text-white text-2xl font-bold">
          <Link to="/">OddWordle.</Link>
        </div>
        <nav className="text-white lg:hidden">
          <Icon path={mdiMenu} size={1} />
        </nav>
        <nav className="hidden lg:block">
          <ul className="flex space-x-2">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 hover:bg-slate-700 p-2 active:scale-95 inline-block"
              >
                Play Game
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/how-to-play"
                className="text-white hover:text-gray-300 hover:bg-slate-700 p-2 active:scale-95 inline-block"
              >
                How to play
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/achievements"
                className="text-white hover:text-gray-300 hover:bg-slate-700 p-2 active:scale-95 inline-block"
              >
                Achievements
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/leader-board"
                className="text-white hover:text-gray-300 hover:bg-slate-700 p-2 active:scale-95 inline-block"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                to="/share"
                className="text-white hover:text-gray-300 hover:bg-slate-700 p-2 active:scale-95 inline-block"
              >
                Share
              </Link>
            </li>
            <li>
              <Link
                to="/developer"
                className="text-white hover:text-gray-300 hover:bg-slate-700 p-2 active:scale-95 inline-block"
              >
                Developer
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
