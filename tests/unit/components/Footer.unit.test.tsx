import { render } from "@testing-library/react";
import Footer from "../../../src/components/Footer";

describe("Footer", () => {
  it("should render", () => {
    const { queryByText } = render(<Footer />);

    expect(queryByText("jwangbychance@github")).not.toBeNull();
  });
});
