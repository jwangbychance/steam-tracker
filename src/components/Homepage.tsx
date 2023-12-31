import { ISteamAchievements } from "../interfaces/ISteamAchievements";
import { ISteamGame } from "../interfaces/ISteamGame";
import GameCardLayout from "./GameCardLayout";
import Achievements from "./Achievements";
import { ISteamGameNews } from "../interfaces/ISteamGameNews";
import GameNews from "./GameNews";

interface HomepageProps {
  gamesData: ISteamGame[];
  achievementsData: { [name: string]: ISteamAchievements };
  gameNewsData: { [name: string]: ISteamGameNews };
}

const Homepage: React.FC<HomepageProps> = ({
  gamesData,
  achievementsData,
  gameNewsData,
}) => {
  return (
    <main className="text-sm md:text-base flex flex-col text-[#E0E0E0] bg-[#30343C] min-h-screen">
      <div className="mx-6 mb-8">
        <div className="w-fit rounded-md font-semibold mb-4">
          Recently Played Games
        </div>
        {gamesData ? (
          <GameCardLayout gamesData={gamesData} />
        ) : (
          <div className="bg-white/30 w-[180px] h-[190px] md:w-[250px] md:h-[260px]  rounded-md shadow-lg select-none animate-pulse" />
        )}
      </div>
      <div className="mx-6 mb-8">
        <div className="w-fit rounded-md font-semibold mb-4">Game News</div>
        {gameNewsData ? (
          <GameNews gameNewsData={gameNewsData} />
        ) : (
          <div className="bg-white/30 w-[180px] h-[190px] md:w-[250px] md:h-[260px]  rounded-md shadow-lg select-none animate-pulse" />
        )}
      </div>
      <div className="mx-6 mb-14">
        <div className="w-fit font-semibold mb-4">Achievements</div>
        {achievementsData ? (
          <Achievements achievementsData={achievementsData} />
        ) : (
          <div className="bg-white/30 w-[180px] h-[190px] md:w-[250px] md:h-[260px]  rounded-md shadow-lg select-none animate-pulse" />
        )}
      </div>
    </main>
  );
};

export default Homepage;
