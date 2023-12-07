import { render } from "@testing-library/react";
import Friends from "../../../src/components/Friends";

describe("Friends", () => {
  it("should not render when data is not provided", () => {
    const { container } = render(<Friends friendsData={null} />);

    expect(container.firstChild).toBeNull();
  });
});
