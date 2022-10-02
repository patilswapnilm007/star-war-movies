import "./SearchField.css";
import { debounce } from "lodash";

function SearchField(props) {
    const handleInputChange = debounce((event) => {
        props.searchMovieByTitle(event.target.value);
    }, 500);
    return (
        <div className="container">
            <div className="nosubmit">
                <input
                    className="nosubmit"
                    type="search"
                    placeholder="Search..."
                    onChange={handleInputChange}
                    data-testid="searchfield-input"
                />
            </div>
        </div>
    );
}

export default SearchField;
