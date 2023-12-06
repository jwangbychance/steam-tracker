import { fetchUserAchievements } from "../../../src/utils/api";
import axios from "axios";

describe("steam user achievements api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks;
  });

  describe("get user steam achievements", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should return user steam achievements", async () => {
      await fetchUserAchievements(1337520);
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamUserAchievements", {
        params: { appId: 1337520 },
      });
    });
  });
});
