import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import "dotenv/config";
import { ISteamAchievements } from "../../src/interfaces/ISteamAchievements";

const steamKey = process.env.STEAM_WEB_API;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISteamAchievements>
) {
  const { appId } = req.query;
  const gonerSteamGames = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appId}&key=${steamKey}&steamid=76561198028760616`;
  const response = await axios.get(gonerSteamGames);
  res.status(200).json(response.data.playerstats.achievements);
}
