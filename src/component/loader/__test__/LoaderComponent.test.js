import { fireEvent, render, screen } from "@testing-library/react";
import LoaderComponent from "../LoaderComponent";

test("renders loader", () => {
    render(<LoaderComponent />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
});

test("renders hidden laoder by default", () => {
    render(<LoaderComponent />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveStyle(`visibility:hidden`);
});

test("renders visible loader if open set to true", () => {
    render(<LoaderComponent open={true} />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveStyle(`visibility:visible`);
});
