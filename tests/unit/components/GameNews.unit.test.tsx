import { render } from "@testing-library/react";
import GameNews from "../../../src/components/GameNews";

describe("GameNews", () => {
  it("should not render when data is not provided", () => {
    const { container } = render(<GameNews gameNewsData={null} />);

    expect(container.firstChild).toBeNull();
  });
});
