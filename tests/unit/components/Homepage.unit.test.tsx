import { render } from "@testing-library/react";
import Homepage from "../../../src/components/Homepage";

describe("Homepage", () => {
  it("should render", () => {
    const { queryByText } = render(
      <Homepage gamesData={null} achievementsData={null} gameNewsData={null} />
    );

    expect(queryByText("Recently Played Games")).not.toBeNull();
    expect(queryByText("Game News")).not.toBeNull();
    expect(queryByText("Achievements")).not.toBeNull();
  });
});
