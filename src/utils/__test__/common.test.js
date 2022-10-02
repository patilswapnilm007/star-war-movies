import { romanize, sortMovies } from "../common";

test("romanize should return proper value", () => {
    expect(romanize(10)).toBe("X");
});

test("romanize should return false if wrong input", () => {
    expect(romanize(null)).toBe(false);
});

test("sort movies by episode type", () => {
    const movieList = [
        {
            episode_id: 4,
            title: "episode_4",
        },
        {
            episode_id: 2,
            title: "episode_2",
        },
        {
            episode_id: 5,
            title: "episode_5",
        },
    ];
    const resultList = sortMovies(movieList, "episode");
    expect(resultList[0].title).toBe("episode_2");
    expect(resultList[2].title).toBe("episode_5");
});

test("sort movies by episode type", () => {
    const movieList = [
        {
            episode_id: 4,
            title: "episode_4",
            release_date: "1992-09-12",
        },
        {
            episode_id: 6,
            title: "episode_6",
            release_date: "1975-09-12",
        },
        {
            episode_id: 2,
            title: "episode_2",
            release_date: "1998-09-12",
        },
    ];
    const resultList = sortMovies(movieList, "year");
    expect(resultList[0].title).toBe("episode_6");
    expect(resultList[2].title).toBe("episode_2");
});
