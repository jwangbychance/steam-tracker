import { render } from "@testing-library/react";
import GameNews from "../../../src/components/GameNews";
import { ISteamGameNews } from "../../../src/interfaces/ISteamGameNews";

describe("GameNews", () => {
  it("should not render when data is not provided", () => {
    const { container } = render(<GameNews gameNewsData={null} />);

    expect(container.firstChild).toBeNull();
  });

  it("should render when data is provided", () => {
    const mockData: { [name: string]: ISteamGameNews } = {
      "Some Game Title": {
        appid: 123,
        count: 1,
        newsitems: [
          {
            appid: 123,
            author: "some_author",
            contents: "some_content",
            date: 123,
            feed_type: 123,
            feedlabel: "some_feed_label",
            feedname: "some_feed_name",
            gid: "123",
            is_external_url: true,
            title: "Some News Title",
            url: "some_url",
          },
        ],
      },
    };

    const { queryByText } = render(<GameNews gameNewsData={mockData} />);

    expect(queryByText("Some News Title"));
  });
});
