import axios from "axios";
import { ISteamUser } from "../interfaces/ISteamUser";

export const fetchUserData = async () => {
  try {
    const response = await axios.get("/api/steamUserSummary");
    const userData: ISteamUser = response.data.response.players[0];
    return userData;
  } catch (err: unknown) {
    throw err;
  }
};
