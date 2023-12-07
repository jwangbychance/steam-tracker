import { render } from "@testing-library/react";
import GameCardLayout from "../../../src/components/GameCardLayout";

describe("GameCardLayout", () => {
  it("should not render when data is not provided", () => {
    const { container } = render(<GameCardLayout gamesData={null} />);

    expect(container.firstChild).toBeNull();
  });
});
