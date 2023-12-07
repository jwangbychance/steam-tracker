import Achievements from "../../../src/components/Achievements";
import { render } from "@testing-library/react";

describe("Achievements", () => {
  it("should not render when data is not provided", () => {
    const { container } = render(<Achievements achievementsData={null} />);

    expect(container.firstChild).toBeNull();
  });
});
