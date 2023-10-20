import axios from "axios";
import { ISteamUser } from "../interfaces/ISteamUser";
import { ISteamGame } from "../interfaces/ISteamGame";

export const fetchUserData = async () => {
  try {
    const response = await axios.get("/api/steamUserSummary");
    const userData: ISteamUser = response.data.response.players[0];
    return userData;
  } catch (err: unknown) {
    throw err;
  }
};

export const fetchGamesData = async () => {
  try {
    const response = await axios.get("/api/steamRecentGames");
    const gamesData: ISteamGame[] = response.data.response.games;
    return gamesData;
  } catch (err: unknown) {
    throw err;
  }
};
