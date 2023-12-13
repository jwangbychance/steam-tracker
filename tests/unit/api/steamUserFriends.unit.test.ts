import { fetchUserFriends } from "../../../src/utils/api";
import axios from "axios";

describe("steam user friends api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get user steam friends", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should return user steam friends", async () => {
      await fetchUserFriends("76561198028760616");
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamUserFriends", {
        params: { steamId: "76561198028760616" },
      });
    });
  });
});
