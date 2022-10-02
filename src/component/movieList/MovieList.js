import axios from "axios";
import { useEffect, useState } from "react";
import { romanize } from "../../utils/common";
import "./MovieList.css";

function MovieList(props) {
    return props.listData.length <= 0 ? (
        <div>No recourd found!</div>
    ) : (
        <div>
            <ul className="movie-list-ul" data-testid="movie-list">
                {props.listData.map((record) => {
                    return (
                        <li
                            key={record.episode_id}
                            className="movie-list-item"
                            onClick={() => {
                                props.changeMovieItem(record.url);
                            }}
                        >
                            <div className="episode-no">
                                EPISODE : {record.episode_id}
                            </div>
                            <div className="movie-title-txt">
                                {`Episode ${romanize(record.episode_id)} ${
                                    record.title
                                }`}
                            </div>
                            <div>{record.release_date}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MovieList;
