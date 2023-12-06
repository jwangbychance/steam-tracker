import { fetchGameNews } from "../../../src/utils/api";
import axios from "axios";

describe("steam game news api call tests", () => {
  afterEach(() => {
    jest.clearAllMocks;
  });

  describe("get steam news", () => {
    const axiosGetSpy = jest.spyOn(axios, "get");

    it("should return steam game news", async () => {
      await fetchGameNews(1337520);
      expect(axiosGetSpy).toHaveBeenCalledWith("/api/steamGameNews", {
        params: { appId: 1337520 },
      });
    });
  });
});
