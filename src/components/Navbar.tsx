import { useEffect, useState } from "react";
import { ISteamUser } from "../interfaces/ISteamUser";

interface NavbarProps {
  playerData: ISteamUser;
}

const Navbar: React.FC<NavbarProps> = ({ playerData }) => {
  const [personaStateColor, setPersonaStateColor] = useState("");

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

  return (
    <div className="flex items-center sticky top-0 w-full bg-[#212121] p-3 font-semibold mb-5 border-b border-[#BD87F9]">
      <div className="mr-auto text-[#E0E0E0]">Steam Tracker</div>
      <div className="flex items-center gap-3 border rounded-full px-3 py-1 border-[#BD87F9] bg-[#BD87F9] text-sm">
        <img src={playerData?.avatar} className="rounded-full" />
        <div>{playerData?.personaname}</div>
        <div className={`${personaStateColor} rounded-full h-3 w-3`} />
      </div>
    </div>
  );
};

export default Navbar;
