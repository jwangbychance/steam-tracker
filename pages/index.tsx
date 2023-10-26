import Head from "next/head";
import "dotenv/config";
import { useEffect, useState } from "react";
import {
  fetchUserData,
  fetchGamesData,
  fetchUserAchievements,
} from "../src/utils/api";
import Homepage from "../src/components/Homepage";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import { ISteamUser } from "../src/interfaces/ISteamUser";
import { ISteamGame } from "../src/interfaces/ISteamGame";
import { ISteamAchievements } from "../src/interfaces/ISteamAchievements";
import usePrevious from "../src/hooks/usePrevious";

export default function Home() {
  const [playerData, setPlayerData] = useState<ISteamUser>(null);
  const [gamesData, setGamesData] = useState<ISteamGame[]>(null);
  const [achievementsData, setAchievementsData] = useState<{
    [name: string]: ISteamAchievements;
  }>(null);
  const prevPlayerData = usePrevious(playerData?.steamid);

  useEffect(() => {
    if (prevPlayerData !== playerData?.steamid) {
      console.log("achievement data reset");
      setAchievementsData(null);
    }

    if (gamesData) {
      gamesData.map((gameData) => {
        fetchUserAchievements(gameData.appid)
          .then((data) => {
            setAchievementsData((prev) => ({
              ...prev,
              [gameData.name]: data,
            }));
          })
          .catch((err) => {
            console.error(err);
          });
      });
    }
  }, [gamesData]);

  const getUserSteamData = (userSteamId: string) => {
    fetchUserData(userSteamId)
      .then((data) => {
        setPlayerData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getUserSteamRecentGames = (userSteamId: string) => {
    fetchGamesData(userSteamId)
      .then((data) => {
        setGamesData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="font-inter relative h-full bg-[#424242]">
      <Head>
        <title>Steam Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        playerData={playerData}
        getUserSteamData={getUserSteamData}
        getUserSteamRecentGames={getUserSteamRecentGames}
      />

      <Homepage gamesData={gamesData} achievementsData={achievementsData} />

      <Footer />
    </div>
  );
}
