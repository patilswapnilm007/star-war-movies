import { render, screen } from "@testing-library/react";
import MovieDetails from "../MovieDetails";

test("renders empty list if blank list", () => {
    render(<MovieDetails />);
    const emptyList = screen.getByText(/No movie selected/i);
    expect(emptyList).toBeInTheDocument();
});

test("renders movie details", () => {
    render(
        <MovieDetails
            movieDetails={{
                data: {
                    episode_id: 2,
                    opening_crawl: "This is movie details!!",
                    director: "ABC XYZ",
                },
            }}
        />
    );
    const episodeText = screen.getByText(/Episode II/i);
    expect(episodeText).toBeInTheDocument();

    const episodeDetails = screen.getByText(/This is movie details!!/i);
    expect(episodeDetails).toBeInTheDocument();

    const episodeDirector = screen.getByText(/Directed by: ABC XYZ/i);
    expect(episodeDirector).toBeInTheDocument();
});
