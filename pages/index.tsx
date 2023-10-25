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

export default function Home() {
  const [playerData, setPlayerData] = useState<ISteamUser>(null);
  const [gamesData, setGamesData] = useState<ISteamGame[]>(null);
  const [achievementsData, setAchievementsData] = useState<{
    [name: string]: ISteamAchievements;
  }>(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setPlayerData(data);
      })
      .catch((err) => {
        console.error(err);
      });

    fetchGamesData()
      .then((data) => {
        setGamesData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
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

  return (
    <div className="font-inter relative h-full bg-[#424242]">
      <Head>
        <title>Steam Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar playerData={playerData} />

      <Homepage gamesData={gamesData} achievementsData={achievementsData} />

      <Footer />
    </div>
  );
}
