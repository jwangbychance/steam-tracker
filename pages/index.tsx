import Head from "next/head";
import "dotenv/config";
import { useEffect, useState } from "react";
import { fetchUserData } from "../src/utils/api";
import Homepage from "../src/components/Homepage";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

export default function Home() {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setPlayerData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="font-open-sans relative h-screen">
      <Head>
        <title>Steam Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar playerData={playerData} />

      <Homepage />

      <Footer />
    </div>
  );
}
