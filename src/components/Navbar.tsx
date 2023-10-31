import { useEffect, useState } from "react";
import { ISteamUser } from "../interfaces/ISteamUser";
import SearchIcon from "../../public/SearchIcon";

interface NavbarProps {
  playerData: ISteamUser;
  getUserSteamData: (userSteamId: string) => void;
  getUserSteamRecentGames: (userSteamId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  playerData,
  getUserSteamData,
  getUserSteamRecentGames,
}) => {
  const [personaStateColor, setPersonaStateColor] = useState("");
  const [userSteamId, setUserSteamId] = useState("");

  useEffect(() => {
    switch (playerData?.personastate) {
      case 1:
        setPersonaStateColor("bg-green-500");
        break;
      case 2:
        setPersonaStateColor("bg-red-700");
        break;
      case 3:
        setPersonaStateColor("bg-orange-300");
        break;
      case 4:
        setPersonaStateColor("bg-yellow-200");
        break;
      case 5:
        setPersonaStateColor("bg-yellow-900");
        break;
      case 6:
        setPersonaStateColor("bg-sky-600");
        break;
      default:
        setPersonaStateColor("bg-gray-500");
        break;
    }
  }, [playerData?.personastate]);

  const handleUserSteamSearch = () => {
    getUserSteamData(userSteamId);
    getUserSteamRecentGames(userSteamId);
  };

  const handleEnterKeySearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getUserSteamData(userSteamId);
      getUserSteamRecentGames(userSteamId);
    }
  };

  return (
    <div className="text-xs md:text-base flex z-10 items-center sticky top-0 w-full bg-[#212121] p-3 font-semibold mb-5">
      <div className="mr-auto text-[#E0E0E0]">Steam Tracker</div>
      <label className="text-xs flex md:gap-2 items-center text-[#E0E0E0] font-normal mr-auto md:text-sm border border-[#E0E0E0]/30 pl-3 rounded-md">
        <input
          placeholder="Search Steam ID"
          className="bg-[#212121] outline-none"
          value={userSteamId}
          onChange={(e) => setUserSteamId(e.target.value)}
          onKeyDown={handleEnterKeySearch}
        />
        <button
          className="border border-l-[#E0E0E0]/30 border-r-0 border-y-0 p-2 flex items-center hover:bg-[#E0E0E0]/20 hover:rounded-md"
          onClick={(e) => handleUserSteamSearch()}
        >
          <div className="w-4">
            <SearchIcon />
          </div>
        </button>
      </label>
      <div className="flex items-center gap-3 rounded-full px-3 py-1 text-xs md:text-sm text-[#E0E0E0]">
        <img src={playerData?.avatar} className="rounded-full" />
        <div>{playerData?.personaname || "User"}</div>
        <div
          className={`${personaStateColor} rounded-full h-2 w-2 md:h-3 md:w-3`}
        />
      </div>
    </div>
  );
};

export default Navbar;
