import { ISteamFriends } from "../../../src/interfaces/ISteamFriends";
import { fetchUserFriends } from "../../../src/utils/api";
import axios from "axios";

describe("steam user friends api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get user steam friends", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should make a correct API call to retrieve user steam friends", async () => {
      await fetchUserFriends("76561198028760616");
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamUserFriends", {
        params: { steamId: "76561198028760616" },
      });
    });

    it("should return user steam friends", async () => {
      const mockResponseData: ISteamFriends = {
        friend_since: 1,
        relationship: "some_relationship",
        steamid: "111",
      };

      axiosGetSpy.mockResolvedValueOnce({ data: mockResponseData });

      const result = await fetchUserFriends("76561198028760616");

      expect(result).toHaveProperty("friend_since");
      expect(result).toHaveProperty("relationship");
      expect(result).toHaveProperty("steamid");
    });
  });
});
