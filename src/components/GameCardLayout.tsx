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
  return (
    <div className="p-3 border border-gray-300 rounded-md w-[250px] h-[260px]">
      {gameData.name}
      <img
        src={`http://media.steampowered.com/steamcommunity/public/images/apps/${gameData.appid}/${gameData.img_icon_url}.jpg`}
      />
      <div>
        2 weeks playtime: {(gameData.playtime_2weeks / 60).toFixed(2)} hrs
      </div>
      <div>
        Total playtime: {(gameData.playtime_forever / 60).toFixed(2)} hrs
      </div>
      <div className="border border-[#212121] my-5" />
      <div className="flex items-center gap-3">
        <WindowsOS />
        playtime: {(gameData.playtime_windows_forever / 60).toFixed(2)} hrs
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5">
          <LinuxOS />
        </div>
        playtime: {(gameData.playtime_linux_forever / 60).toFixed(2)} hrs
      </div>
      <div className="flex items-center gap-3">
        <MacOS />
        playtime: {(gameData.playtime_mac_forever / 60).toFixed(2)} hrs
      </div>
    </div>
  );
};

const GameCardLayout: React.FC<GameCardLayoutProps> = ({ gamesData }) => {
  return (
    <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      <div className="inline-flex gap-8">
        {gamesData.map((game) => (
          <GameCard gameData={game} key={game.appid} />
        ))}
      </div>
    </div>
  );
};

export default GameCardLayout;
