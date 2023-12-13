import { ISteamGameNews } from "../../../src/interfaces/ISteamGameNews";
import { fetchGameNews } from "../../../src/utils/api";
import axios from "axios";

describe("steam game news api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get steam news", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should make a correct API call to retrieve steam game news", async () => {
      await fetchGameNews(1337520);
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamGameNews", {
        params: { appId: 1337520 },
      });
    });

    it("should return steam game news data", async () => {
      const mockResponseData: ISteamGameNews = {
        appid: 1337520,
        count: 1,
        newsitems: [
          {
            appid: 1337520,
            author: "some_author",
            contents: "some_contents",
            date: 111,
            feed_type: 111,
            feedlabel: "some_feedlabel",
            feedname: "some_feedname",
            gid: "some_gid",
            is_external_url: true,
            title: "some_title",
            url: "some_url",
          },
        ],
      };

      axiosGetSpy.mockResolvedValueOnce({ data: mockResponseData });

      const result = await fetchGameNews(1337520);

      expect(result).toHaveProperty("appid");
      expect(result).toHaveProperty("count");
      expect(result).toHaveProperty("newsitems");
    });
  });
});
