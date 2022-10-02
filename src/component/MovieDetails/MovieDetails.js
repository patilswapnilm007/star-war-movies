import { romanize } from "../../utils/common";
import "./MovieDetails.css";

function MovieDetails(props) {
    return props.movieDetails ? (
        <div className="movie-details">
            <h2> Episode {romanize(props.movieDetails.data.episode_id)} </h2>
            <p>{props.movieDetails.data.opening_crawl}</p>
            <p>Directed by: {props.movieDetails.data.director}</p>
        </div>
    ) : (
        <div className="no-record">No movie selected</div>
    );
}

export default MovieDetails;
