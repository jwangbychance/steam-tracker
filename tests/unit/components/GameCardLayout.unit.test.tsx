import { render } from "@testing-library/react";
import GameCardLayout from "../../../src/components/GameCardLayout";
import { ISteamGame } from "../../../src/interfaces/ISteamGame";

describe("GameCardLayout", () => {
  it("should not render when data is not provided", () => {
    const { container } = render(<GameCardLayout gamesData={null} />);

    expect(container.firstChild).toBeNull();
  });

  it("should render when data is provided", () => {
    const mockData: ISteamGame[] = [
      {
        appid: 123,
        img_icon_url: "some_url",
        name: "Some Game",
        playtime_2weeks: 123,
        playtime_forever: 123,
        playtime_linux_forever: 123,
        playtime_mac_forever: 123,
        playtime_windows_forever: 123,
      },
    ];

    const { queryByText } = render(<GameCardLayout gamesData={mockData} />);

    expect(queryByText("Some Game")).not.toBeNull();
  });
});
