import { render } from "@testing-library/react";
import Navbar from "../../../src/components/Navbar";
import { ISteamUser } from "../../../src/interfaces/ISteamUser";

describe("Navbar", () => {
  const mockUserSteamData = jest.fn();
  const mockUserSteamRecentGames = jest.fn();

  it("should render no username when data is not provided", () => {
    const { queryByText } = render(
      <Navbar
        playerData={null}
        getUserSteamData={mockUserSteamData}
        getUserSteamRecentGames={mockUserSteamRecentGames}
      />
    );

    expect(queryByText("User")).not.toBeNull();
  });

  it("should render username when data is provided", () => {
    const mockData: ISteamUser = {
      avatar: "some_avatar",
      avatarfull: "some_avatarfull",
      avatarhash: "some_avatarhash",
      avatarmedium: "some_avatarmedium",
      communityvisibilitystate: 111,
      lastlogoff: 111,
      personaname: "Some Persona Name",
      personastate: 111,
      personastateflags: 111,
      primaryclanid: "some_primaryclanid",
      profilestate: 111,
      profileurl: "some_profileurl",
      steamid: "some_steamid",
      timecreated: 111,
    };

    const { queryByText } = render(
      <Navbar
        playerData={mockData}
        getUserSteamData={mockUserSteamData}
        getUserSteamRecentGames={mockUserSteamRecentGames}
      />
    );

    expect(queryByText("Some Persona Name")).not.toBeNull();
  });
});
