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
        Total playtime (2 wks): {(gameData.playtime_2weeks / 60).toFixed(2)} hrs
      </div>
      <div>
        Total playtime: {(gameData.playtime_forever / 60).toFixed(2)} hrs
      </div>
    </div>
  );
};

const GameCardLayout: React.FC<GameCardLayoutProps> = ({ gamesData }) => {
  return (
    <div className="flex gap-8">
      {gamesData.map((game) => (
        <GameCard gameData={game} key={game.appid} />
      ))}
    </div>
  );
};

export default GameCardLayout;
