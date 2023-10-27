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
      setAchievementsData(null);
    }
  }, [playerData?.steamid]);

  useEffect(() => {
    const fetchAchievementsData = async () => {
      if (gamesData) {
        try {
          const dataPromises = gamesData.map(async (gameData) => {
            try {
              const data = await fetchUserAchievements(gameData.appid);
              return [gameData.name, data];
            } catch (err: unknown) {
              console.error(err);
              return [gameData.name, null];
            }
          });

          const dataResults = (await Promise.allSettled(dataPromises)) as {
            status: "fulfilled" | "rejected";
            value: ISteamAchievements[];
          }[];

          const fulfilledResults = dataResults
            .filter((result) => result.status === "fulfilled")
            .map((data) => data.value);
          console.log(Object.fromEntries(fulfilledResults));
          setAchievementsData(Object.fromEntries(fulfilledResults));
        } catch (err: unknown) {
          console.error(err);
        }
      }
    };

    fetchAchievementsData();
  }, [gamesData]);

  const getUserSteamData = async (userSteamId: string) => {
    try {
      const playerData = await fetchUserData(userSteamId);
      setPlayerData(playerData);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  const getUserSteamRecentGames = async (userSteamId: string) => {
    try {
      const gameData = await fetchGamesData(userSteamId);
      setGamesData(gameData);
    } catch (err: unknown) {
      console.error(err);
    }
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
