import { ISteamGame } from "../../../src/interfaces/ISteamGame";
import { fetchGamesData } from "../../../src/utils/api";
import axios from "axios";

describe("steam recent games api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get recent steam games", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should make a correct API call to retrieve user steam recent games", async () => {
      await fetchGamesData("76561198028760616");
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamRecentGames", {
        params: { steamId: "76561198028760616" },
      });
    });

    it("should return user steam recent games data", async () => {
      const mockResponseData: ISteamGame = {
        appid: 1337520,
        img_icon_url: "some_img_icon_url",
        name: "some_name",
        playtime_2weeks: 1,
        playtime_forever: 2,
        playtime_linux_forever: 111,
        playtime_mac_forever: 111,
        playtime_windows_forever: 111,
      };

      axiosGetSpy.mockResolvedValueOnce({ data: mockResponseData });

      const result = await fetchGamesData("76561198028760616");

      expect(result).toHaveProperty("appid");
      expect(result).toHaveProperty("img_icon_url");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("playtime_2weeks");
      expect(result).toHaveProperty("playtime_forever");
      expect(result).toHaveProperty("playtime_linux_forever");
      expect(result).toHaveProperty("playtime_mac_forever");
      expect(result).toHaveProperty("playtime_windows_forever");
    });
  });
});
