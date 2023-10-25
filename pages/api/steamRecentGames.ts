import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import "dotenv/config";
import { ISteamGame } from "../../src/interfaces/ISteamGame";

const steamKey = process.env.STEAM_WEB_API;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISteamGame[]>
) {
  const { steamId } = req.query;
  const steamGamesURL = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${steamKey}&steamid=${steamId}&format=json`;
  const response = await axios.get(steamGamesURL);
  res.status(200).json(response.data);
}
