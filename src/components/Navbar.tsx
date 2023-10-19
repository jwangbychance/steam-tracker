import { ISteamUser } from "../interfaces/ISteamUser";

interface NavbarProps {
  playerData: ISteamUser;
}

const Navbar: React.FC<NavbarProps> = ({ playerData }) => {
  return (
    <div className="flex items-center sticky top-0 w-full bg-[#171A21] text-white p-3 font-semibold mb-5">
      <div className="mr-auto">Steam Tracker</div>
      <div className="flex items-center gap-3">
        <img src={playerData?.avatar} className="rounded-full" />
        <div>{playerData?.personaname}</div>
      </div>
    </div>
  );
};

export default Navbar;
