import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import "dotenv/config";
import { ISteamUser } from "../../src/interfaces/ISteamUser";

const steamKey = process.env.STEAM_WEB_API;
const gonerProfile = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamKey}&steamids=76561198028760616`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISteamUser>
) {
  const response = await axios.get(gonerProfile);
  res.status(200).json(response.data);
}
