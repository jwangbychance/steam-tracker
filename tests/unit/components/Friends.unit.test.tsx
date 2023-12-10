import { fireEvent, render } from "@testing-library/react";
import Friends from "../../../src/components/Friends";
import { ISteamFriends } from "../../../src/interfaces/ISteamFriends";

describe("Friends", () => {
  it("should not render when data is not provided", () => {
    const { container } = render(<Friends friendsData={null} />);

    expect(container.firstChild).toBeNull();
  });

  it("should render when data is provided", () => {
    const mockData: ISteamFriends[] = [
      { friend_since: 123, relationship: "friend", steamid: "123" },
    ];

    const { queryByText } = render(<Friends friendsData={mockData} />);

    fireEvent.click(queryByText("Friends"));

    expect(queryByText("123")).not.toBeNull();
  });
});
