import { ISteamAchievements } from "../interfaces/ISteamAchievements";
import { ISteamGame } from "../interfaces/ISteamGame";
import GameCardLayout from "./GameCardLayout";
import Achievements from "./Achievements";

interface HomepageProps {
  gamesData: ISteamGame[];
  achievementsData: { [name: string]: ISteamAchievements };
}

const Homepage: React.FC<HomepageProps> = ({ gamesData, achievementsData }) => {
  return (
    <main className="flex flex-col text-[#E0E0E0] bg-[#424242] min-h-screen">
      <div className="mx-6 mb-8">
        <div className="w-fit rounded-md font-semibold mb-4">
          Recently Played Games
        </div>
        {gamesData ? (
          <GameCardLayout gamesData={gamesData} />
        ) : (
          <div className="bg-white/30 w-[250px] h-[260px]  rounded-md shadow-lg select-none animate-pulse" />
        )}
      </div>
      <div className="mx-6 mb-8">
        <div className="w-fit font-semibold mb-4">Achievements</div>
        {achievementsData ? (
          <Achievements achievementsData={achievementsData} />
        ) : (
          <div className="bg-white/30 w-[250px] h-[260px]  rounded-md shadow-lg select-none animate-pulse" />
        )}
      </div>
      <button className="text-black font-semibold sticky bottom-12 z-10 self-end mr-8 rounded-full bg-[#BC88F8] px-5 py-1">
        Friends
      </button>
    </main>
  );
};

export default Homepage;
