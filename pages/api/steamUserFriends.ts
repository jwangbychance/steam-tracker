import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import "dotenv/config";
import { ISteamFriends } from "../../src/interfaces/ISteamFriends";

const steamKey = process.env.STEAM_WEB_API;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISteamFriends[]>
) {
  const { steamId } = req.query;
  const steamUserFriendsURL = `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${steamKey}&steamid=${steamId}&relationship=friend`;
  const response = await axios.get(steamUserFriendsURL);
  res.status(200).json(response.data);
}
