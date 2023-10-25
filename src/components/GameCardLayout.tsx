import LinuxOS from "../../public/LinuxOS";
import MacOS from "../../public/MacOS";
import WindowsOS from "../../public/WindowsOS";
import { ISteamGame } from "../interfaces/ISteamGame";

interface GameCardProps {
  gameData: ISteamGame;
}

interface GameCardLayoutProps {
  gamesData: ISteamGame[];
}

const GameCard: React.FC<GameCardProps> = ({ gameData }) => {
  const displayPlaytimeHours = (playtime: number) => {
    return !isNaN(playtime) ? (playtime / 60).toFixed(2) : 0;
  };

  return (
    <div className="p-3 border border-gray-300/50 rounded-md w-[250px] h-[260px]">
      <div className="flex items-center gap-3 mb-5">
        <img
          src={`http://media.steampowered.com/steamcommunity/public/images/apps/${gameData.appid}/${gameData.img_icon_url}.jpg`}
          className="rounded-sm"
        />
        <div className="underline truncate">{gameData.name}</div>
      </div>
      <div>
        2 weeks playtime: {(gameData.playtime_2weeks / 60).toFixed(2)} hrs
      </div>
      <div>
        Total playtime: {(gameData.playtime_forever / 60).toFixed(2)} hrs
      </div>
      <div className="border border-[#212121] my-5" />
      <div className="flex items-center gap-3">
        <WindowsOS />
        playtime: {displayPlaytimeHours(gameData.playtime_windows_forever)} hrs
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5">
          <LinuxOS />
        </div>
        playtime: {displayPlaytimeHours(gameData.playtime_linux_forever)} hrs
      </div>
      <div className="flex items-center gap-3">
        <MacOS />
        playtime: {displayPlaytimeHours(gameData.playtime_mac_forever)} hrs
      </div>
    </div>
  );
};

const GameCardLayout: React.FC<GameCardLayoutProps> = ({ gamesData }) => {
  return (
    <div className="overflow-x-auto">
      <div className="inline-flex gap-8 mb-3">
        {gamesData.map((game) => (
          <GameCard gameData={game} key={game.appid} />
        ))}
      </div>
    </div>
  );
};

export default GameCardLayout;
