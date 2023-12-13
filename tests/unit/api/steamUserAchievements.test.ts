import { ISteamAchievements } from "../../../src/interfaces/ISteamAchievements";
import { fetchUserAchievements } from "../../../src/utils/api";
import axios from "axios";

describe("steam user achievements api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get user steam achievements", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should make a correct API call to retrieve user steam achievements", async () => {
      await fetchUserAchievements(1337520);
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamUserAchievements", {
        params: { appId: 1337520 },
      });
    });

    it("should return user steam achievements data", async () => {
      const mockResponseData: ISteamAchievements = {
        name: "some_achievements",
        achieved: 1,
      };

      axiosGetSpy.mockResolvedValueOnce({ data: mockResponseData });

      const result = await fetchUserAchievements(1337520);

      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("achieved");
    });
  });
});
