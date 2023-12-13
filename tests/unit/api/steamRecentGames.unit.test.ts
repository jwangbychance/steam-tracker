import { fetchGamesData } from "../../../src/utils/api";
import axios from "axios";

describe("steam recent games api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get recent steam games", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should return user steam recent games", async () => {
      await fetchGamesData("76561198028760616");
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamRecentGames", {
        params: { steamId: "76561198028760616" },
      });
    });
  });
});
