import { ISteamAchievements } from "../interfaces/ISteamAchievements";

interface Achievement {
  gameTitle: string;
  achievements: ISteamAchievements[];
}

interface AchievementsProps {
  [name: string]: ISteamAchievements;
}

const Achievement: React.FC<Achievement> = ({ gameTitle, achievements }) => {
  return (
    <div className="flex-col min-w-[250px] border border-gray-300/50 p-3 rounded-md h-fit">
      <div className="underline">
        {gameTitle} ({Array.isArray(achievements) ? achievements.length : "0"})
      </div>
      {achievements ? (
        achievements.map((achievement, i) => (
          <div key={i}>{achievement.name}</div>
        ))
      ) : (
        <div>No achievements</div>
      )}
    </div>
  );
};

const Achievements: React.FC<AchievementsProps> = ({ achievementsData }) => {
  return (
    <div className="overflow-x-auto mb-8">
      <div className="flex gap-8 mb-3">
        {Object.keys(achievementsData).map((game) => (
          <Achievement gameTitle={game} achievements={achievementsData[game]} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
