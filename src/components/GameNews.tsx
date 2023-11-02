import { ISteamGameNews } from "../interfaces/ISteamGameNews";

interface GameNewsCardProps {
  gameTitle: string;
  gameNews: ISteamGameNews;
}

interface GameNewsProps {
  gameNewsData: { [name: string]: ISteamGameNews };
}

const GameNewsCard: React.FC<GameNewsCardProps> = ({ gameTitle, gameNews }) => {
  return (
    <div className="flex flex-col min-w-[180px] md:min-w-[250px] max-w-[180px] md:max-w-[250px] bg-gradient-to-r from-[#2A2F3A] to-[#252930] p-3 rounded-md h-fit">
      <div className="underline truncate" title={gameTitle}>
        {gameTitle}
      </div>
      {gameNews ? (
        gameNews.newsitems.map((news, i) => (
          <a
            key={i}
            href={news.url}
            className="truncate"
            title={news.title}
            target="_blank"
          >
            {news.title}
          </a>
        ))
      ) : (
        <div>No Game News</div>
      )}
    </div>
  );
};

const GameNews: React.FC<GameNewsProps> = ({ gameNewsData }) => {
  return (
    <div className="overflow-x-auto mb-8">
      <div className="flex gap-8 mb-3">
        {Object.keys(gameNewsData).map((game, i) => (
          <div key={i}>
            <GameNewsCard gameTitle={game} gameNews={gameNewsData[game]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameNews;
