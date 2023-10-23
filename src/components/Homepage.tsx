import { ISteamGame } from "../interfaces/ISteamGame";
import GameCardLayout from "./GameCardLayout";

interface HomepageProps {
  gamesData: ISteamGame[];
}

const Homepage: React.FC<HomepageProps> = ({ gamesData }) => {
  return (
    <main className="mx-6 px-3 flex flex-col text-[#E0E0E0]">
      <div className="mb-8">
        <div className="w-fit rounded-md font-semibold mb-4">
          Recently Played Games
        </div>
        {gamesData ? (
          <GameCardLayout gamesData={gamesData} />
        ) : (
          <div>Loading...</div>
        )}
        {/* <div className="flex justify-end">View more games (WIP)</div> */}
      </div>
      <div className="mb-8">
        <div className="w-fit font-semibold mb-4">Achievements</div>
        <div>Achievements...</div>
      </div>
    </main>
  );
};

export default Homepage;
