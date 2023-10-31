import { useState } from "react";
import { ISteamFriends } from "../interfaces/ISteamFriends";

interface FriendsProps {
  friendsData: ISteamFriends[];
}

interface FriendsListProps {
  friendsData: ISteamFriends[];
  toggleFriendsList: () => void;
}

const FriendsList: React.FC<FriendsListProps> = ({
  friendsData,
  toggleFriendsList,
}) => {
  return (
    <div>
      <div className="text-xs md:text-base overflow-y-auto h-[250px] w-[160px] md:h-[500px] text-white absolute bottom-16 md:bottom-24 bg-[#424242] right-5 md:right-10 border border-[#E0E0E0] md:w-[250px] rounded-md">
        <div className=" flex justify-between underline font-semibold sticky top-0 bg-[#212121] p-2 md:p-3">
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
        {friendsData.map((friend) => (
          <div key={friend.steamid} className="px-2 md:px-3">
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
