import { render } from "@testing-library/react";
import Navbar from "../../../src/components/Navbar";

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
});
