import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Sort by", () => {
    render(<App />);
    const sortBtn = screen.getByText(/Sort by.../i);
    expect(sortBtn).toBeInTheDocument();
    screen.debug();
});

test("renders search input field", () => {
    render(<App />);
    const searchInput = screen.getByTestId("searchfield-input");
    expect(searchInput).toBeInTheDocument();
});

test("renders blank record list label", () => {
    render(<App />);
    const emptyList = screen.getByText(/No recourd found!/i);
    expect(emptyList).toBeInTheDocument();
});

test("renders empty record detail label ", () => {
    render(<App />);
    const emptyDetails = screen.getByText(/No movie selected/i);
    expect(emptyDetails).toBeInTheDocument();
});
