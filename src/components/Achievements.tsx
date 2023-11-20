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
    <div className="flex-col min-w-[180px] md:min-w-[250px] max-w-[180px] md:max-w-[250px] bg-gradient-to-r from-[#2A2F3A] to-[#252930] p-3 rounded-md h-fit border border-white/50">
      <div
        className="underline truncate"
        title={`${gameTitle} (${
          Array.isArray(achievements) ? achievements.length : "0"
        })`}
      >
        {gameTitle} ({Array.isArray(achievements) ? achievements.length : "0"})
      </div>
      {achievements ? (
        achievements.map((achievement, i) => (
          <div key={i} className="truncate" title={achievement.name}>
            {achievement.name}
          </div>
        ))
      ) : (
        <div>No achievements</div>
      )}
    </div>
  );
};

const Achievements: React.FC<AchievementsProps> = ({ achievementsData }) => {
  return (
    <div className="overflow-x-auto mb-8  scrollbar-thin scrollbar-thumb-[#252930] scrollbar-track-[#30343C]">
      <div className="flex gap-8 mb-3">
        {Object.keys(achievementsData).map((game, i) => (
          <div key={i}>
            <Achievement
              gameTitle={game}
              achievements={achievementsData[game]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
