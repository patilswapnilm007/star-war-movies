import { fireEvent, render, screen } from "@testing-library/react";
import SearchField from "../SearchField";

test("renders searchfield", () => {
    render(<SearchField />);
    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
});

test("should handle search field text change event", async () => {
    const handleTextChange = jest.fn();
    render(<SearchField searchMovieByTitle={handleTextChange} />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, {
        target: { value: "new value" },
    });
    await new Promise((r) => setTimeout(r, 1000));
    expect(handleTextChange).toHaveBeenCalled();
});
