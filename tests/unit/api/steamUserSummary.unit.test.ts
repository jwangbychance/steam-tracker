import { fetchUserData } from "../../../src/utils/api";
import axios from "axios";

describe("steam user data api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks;
  });

  describe("get user steam data", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should return user steam data", async () => {
      await fetchUserData("76561198028760616");
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamUserSummary", {
        params: { steamId: "76561198028760616" },
      });
    });
  });
});
