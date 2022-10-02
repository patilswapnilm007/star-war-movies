import { fireEvent, render, screen } from "@testing-library/react";
import MovieList from "../MovieList";

test("renders empty list if blank list", () => {
    render(<MovieList listData={[]} />);
    const emptyList = screen.getByText(/No recourd found!/i);
    expect(emptyList).toBeInTheDocument();
});

test("renders movie list", () => {
    const { container } = render(
        <MovieList
            listData={[
                {
                    episode_id: 2,
                    title: "This is episode 2",
                    release_date: "1992-09-12",
                },
                {
                    episode_id: 3,
                    title: "This is episode 3",
                    release_date: "1977-05-08",
                },
                {
                    episode_id: 5,
                    title: "This is episode 5",
                    release_date: "1985-04-18",
                },
            ]}
        />
    );
    expect(container.querySelectorAll(".movie-list-item").length).toBe(3);
});

test("should call handle on list item click", () => {
    const handleClick = jest.fn();
    const { container } = render(
        <MovieList
            listData={[
                {
                    episode_id: 2,
                    title: "This is episode 2",
                    release_date: "1992-09-12",
                },
                {
                    episode_id: 3,
                    title: "This is episode 3",
                    release_date: "1977-05-08",
                },
                {
                    episode_id: 5,
                    title: "This is episode 5",
                    release_date: "1985-04-18",
                },
            ]}
            changeMovieItem={handleClick}
        />
    );
    const listItem = container.querySelectorAll(".movie-list-item")[0];
    fireEvent.click(listItem);
    expect(handleClick).toHaveBeenCalled();
});
