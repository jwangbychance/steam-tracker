import Achievements from "../../../src/components/Achievements";
import { render } from "@testing-library/react";
import { ISteamAchievements } from "../../../src/interfaces/ISteamAchievements";

describe("Achievements", () => {
  it("should not render when data is not provided", () => {
    const { container } = render(<Achievements achievementsData={null} />);

    expect(container.firstChild).toBeNull();
  });

  it("should render when data is provided", () => {
    const mockData: {
      [name: string]: ISteamAchievements[];
    } = {
      "Some Game Title": [{ name: "some_achievement", achieved: 1 }],
    };

    const { queryByText } = render(
      <Achievements achievementsData={mockData} />
    );

    expect(queryByText("some_achievement")).not.toBeNull();
  });
});
