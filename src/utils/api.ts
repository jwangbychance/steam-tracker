import axios from "axios";
import { ISteamUser } from "../interfaces/ISteamUser";
import { ISteamGame } from "../interfaces/ISteamGame";
import { ISteamAchievements } from "../interfaces/ISteamAchievements";
import { ISteamFriends } from "../interfaces/ISteamFriends";
import { ISteamGameNews } from "../interfaces/ISteamGameNews";

export const fetchUserData = async (steamId: string) => {
  try {
    const response = await axios.get("/api/steamUserSummary", {
      params: { steamId },
    });
    const userData: ISteamUser = response.data.response.players[0];
    return userData;
  } catch (err: unknown) {
    throw err;
  }
};

export const fetchGamesData = async (steamId: string) => {
  try {
    const response = await axios.get("/api/steamRecentGames", {
      params: { steamId },
    });
    const gamesData: ISteamGame[] = response.data.response.games;
    return gamesData;
  } catch (err: unknown) {
    throw err;
  }
};

export const fetchUserAchievements = async (appId: number) => {
  try {
    const response = await axios.get("/api/steamUserAchievements", {
      params: { appId },
    });
    const achievementsData: ISteamAchievements = response.data;
    return achievementsData;
  } catch (err: unknown) {
    throw err;
  }
};

export const fetchUserFriends = async (steamId: string) => {
  try {
    const response = await axios.get("/api/steamUserFriends", {
      params: { steamId },
    });
    const friendsData: ISteamFriends[] = response.data.friendslist.friends;
    return friendsData;
  } catch (err: unknown) {
    throw err;
  }
};

export const fetchGameNews = async (appId: number) => {
  try {
    const response = await axios.get("/api/steamGameNews", {
      params: { appId },
    });
    const gameNewsData: ISteamGameNews = response.data;
    return gameNewsData;
  } catch (err: unknown) {
    throw err;
  }
};
