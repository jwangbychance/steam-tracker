import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import "dotenv/config";
import { ISteamGame } from "../../src/interfaces/ISteamGame";

const steamKey = process.env.STEAM_WEB_API;
const gonerSteamGames = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${steamKey}&steamid=76561198028760616&format=json`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISteamGame[]>
) {
  const response = await axios.get(gonerSteamGames);
  res.status(200).json(response.data);
}
