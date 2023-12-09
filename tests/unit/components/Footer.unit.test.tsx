import { fireEvent, render } from "@testing-library/react";
import Footer from "../../../src/components/Footer";

let windowSpy;

describe("Footer", () => {
  beforeEach(() => {
    windowSpy = jest.spyOn(window, "location", "get");
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it("should render", () => {
    const { queryByText } = render(<Footer />);

    expect(queryByText("jwangbychance@github")).not.toBeNull();
  });

  it("should open the correct URL when the tag is pressed", () => {
    const { queryByText } = render(<Footer />);

    fireEvent.click(queryByText("jwangbychance@github"));

    windowSpy.mockImplementation(() => ({
      origin: "https://github.com/jwangbychance",
    }));

    expect(window.location.origin).toEqual("https://github.com/jwangbychance");
  });
});
