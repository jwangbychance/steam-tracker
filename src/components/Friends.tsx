import { useEffect, useRef, useState } from "react";
import { ISteamFriends } from "../interfaces/ISteamFriends";
import { fetchUserData } from "../utils/api";

interface FriendsProps {
  friendsData: ISteamFriends[];
}

interface FriendsListProps {
  friendsData: ISteamFriends[];
  toggleFriendsList: () => void;
}

interface FriendProps {
  friendData: ISteamFriends;
}

const Friend: React.FC<FriendProps> = ({ friendData }) => {
  const [friendName, setFriendName] = useState("");

  const unixTimestampToTime = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  };

  useEffect(() => {
    const fetchFriendName = async (steamId: string) => {
      try {
        const playerData = await fetchUserData(steamId);
        setFriendName(playerData.personaname);
      } catch (err: unknown) {
        console.error(err);
      }
    };

    fetchFriendName(friendData.steamid);
  }, [friendData]);

  return (
    <div
      key={friendData.steamid}
      className="py-1 px-2 md:px-3 flex flex-col border border-white/30 rounded-md"
    >
      <div className="font-semibold">{friendName}</div>
      <div>
        <span className="underline">Steam ID:</span> {friendData.steamid}
      </div>
      <div>
        <span className="underline">Friend since:</span>{" "}
        {unixTimestampToTime(friendData.friend_since)}
      </div>
    </div>
  );
};

const FriendsList: React.FC<FriendsListProps> = ({
  friendsData,
  toggleFriendsList,
}) => {
  const listRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(e.target)) {
        toggleFriendsList();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listRef]);

  return (
    <div
      className="text-xs md:text-sm overflow-y-auto h-[250px] w-[160px] md:h-[500px] text-white absolute bottom-16 md:bottom-24 bg-[#30343C] right-5 md:right-10 border border-[#E0E0E0] md:w-[250px] rounded-md"
      ref={listRef}
    >
      <div className="flex justify-between underline font-semibold sticky top-0 bg-gradient-to-r from-[#2A2F3A] to-[#252930] p-2 md:p-3">
        Friend List
        <button className="w-4 md:w-5" onClick={toggleFriendsList}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-2 m-2 text-xs md:text-sm">
        {friendsData.map((friend) => (
          <Friend friendData={friend} />
        ))}
      </div>
    </div>
  );
};

const Friends: React.FC<FriendsProps> = ({ friendsData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFriendsList = () => {
    setIsOpen((prev) => !prev);
  };

  if (!friendsData) {
    return null;
  }

  return (
    <>
      <button
        className="text-xs md:text-base relative text-black font-semibold fixed bottom-5 md:bottom-10 right-5 md:right-10 z-10 rounded-full bg-white px-6 py-2"
        onClick={toggleFriendsList}
      >
        Friends
      </button>
      {isOpen && (
        <FriendsList
          friendsData={friendsData}
          toggleFriendsList={toggleFriendsList}
        />
      )}
    </>
  );
};

export default Friends;
