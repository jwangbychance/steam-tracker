import { useState } from "react";
import { ISteamFriends } from "../interfaces/ISteamFriends";

interface FriendsProps {
  friendsData: ISteamFriends[];
}

const FriendsList: React.FC<FriendsProps> = ({ friendsData }) => {
  return (
    <div>
      <div className="overflow-y-auto h-[500px] text-white absolute bottom-24 bg-[#424242] right-10 border border-[#E0E0E0] w-[250px] rounded-md">
        <div className="underline font-semibold sticky top-0 bg-[#212121] p-3">
          Friend List
        </div>
        {friendsData.map((friend) => (
          <div key={friend.steamid} className="px-3">
            {friend.steamid}
          </div>
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

  return (
    <>
      <button
        className="relative text-black font-semibold fixed bottom-10 right-10 z-10 rounded-full bg-white px-6 py-2"
        onClick={toggleFriendsList}
      >
        Friends
      </button>
      {isOpen && <FriendsList friendsData={friendsData} />}
    </>
  );
};

export default Friends;
