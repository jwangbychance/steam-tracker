import { ISteamUser } from "../../../src/interfaces/ISteamUser";
import { fetchUserData } from "../../../src/utils/api";
import axios from "axios";

describe("steam user data api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get user steam data", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should make a correct API call to retrieve user steam data", async () => {
      await fetchUserData("76561198028760616");
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamUserSummary", {
        params: { steamId: "76561198028760616" },
      });
    });

    it("should return user steam data", async () => {
      const mockResponseData: ISteamUser = {
        avatar: "some_avatar",
        avatarfull: "some_avatarfull",
        avatarhash: "some_avatarhash",
        avatarmedium: "some_avatarmedium",
        communityvisibilitystate: 1,
        lastlogoff: 1,
        personaname: "some_personaname",
        personastate: 1,
        personastateflags: 1,
        primaryclanid: "some_primaryclanid",
        profilestate: 1,
        profileurl: "some_profileurl",
        steamid: "some_steamid",
        timecreated: 1,
      };

      axiosGetSpy.mockResolvedValueOnce({ data: mockResponseData });

      const result = await fetchUserData("76561198028760616");

      expect(result).toHaveProperty("avatar");
      expect(result).toHaveProperty("avatarfull");
      expect(result).toHaveProperty("avatarhash");
      expect(result).toHaveProperty("avatarmedium");
      expect(result).toHaveProperty("communityvisibilitystate");
      expect(result).toHaveProperty("lastlogoff");
      expect(result).toHaveProperty("personaname");
      expect(result).toHaveProperty("personastate");
      expect(result).toHaveProperty("personastateflags");
      expect(result).toHaveProperty("primaryclanid");
      expect(result).toHaveProperty("profilestate");
      expect(result).toHaveProperty("profileurl");
      expect(result).toHaveProperty("steamid");
      expect(result).toHaveProperty("timecreated");
    });
  });
});
