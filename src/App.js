import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./component/movieList/MovieList";
import MovieDetails from "./component/MovieDetails/MovieDetails";
import SearchField from "./component/searchfield/SearchField";
import LoaderComponent from "./component/loader/LoaderComponent";
import {
    Button,
    Popper,
    Fade,
    Paper,
    MenuList,
    MenuItem,
    Divider,
    ListItemText,
    IconButton,
} from "@mui/material";
import axios from "axios";
import { Close } from "@mui/icons-material";
import { sortMovies } from "./utils/common";

function App() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);
    const [listData, setListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovieList = async () => {
        try {
            const response = await axios.get(
                "https://swapi.dev/api/films/?format=json"
            );
            setListData(response.data.results);
            setIsLoading(false);
        } catch (error) {
            console.log("error", error);
            setIsLoading(false);
        }
    };

    const fetchMovieDetails = async (url) => {
        try {
            const response = await axios.get(url);
            setMovieDetails(response);
            setIsLoading(false);
        } catch (error) {
            console.log("error--", error);
            setIsLoading(false);
        }
    };

    const fetchMovieBySearch = async (searchText) => {
        try {
            const response = await axios.get(
                `https://swapi.dev/api/films/?search=${searchText}`
            );
            setListData(response.data.results);
            setIsLoading(false);
        } catch (error) {
            console.log("error--", error);
            setIsLoading(false);
        }
    };

    const handleMovieItemChange = (url) => {
        setIsLoading(true);
        fetchMovieDetails(url);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMenuItemClick = (type) => {
        handleClose();
        setListData(sortMovies(listData, type));
    };

    const handleSearchMovies = (searchText) => {
        setMovieDetails(null);
        setIsLoading(true);
        fetchMovieBySearch(searchText);
    };

    useEffect(() => {
        setIsLoading(true);
        fetchMovieList();
    }, []);

    return (
        <div className="App">
            <LoaderComponent open={isLoading} />
            <div className="filter-section">
                <div className="sort-section">
                    <Button
                        variant="outlined"
                        onClick={(event) => {
                            setAnchorEl(event.currentTarget);
                            setOpen(true);
                        }}
                    >
                        Sort by...
                    </Button>

                    <Popper
                        open={open}
                        anchorEl={anchorEl}
                        placement={"bottom-start"}
                        transition
                    >
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <MenuList>
                                        <MenuItem>
                                            <ListItemText>Sort by</ListItemText>
                                            <IconButton onClick={handleClose}>
                                                <Close />
                                            </IconButton>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem
                                            onClick={() =>
                                                handleMenuItemClick("episode")
                                            }
                                        >
                                            <ListItemText>Episode</ListItemText>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleMenuItemClick("year")
                                            }
                                        >
                                            <ListItemText>Year</ListItemText>
                                        </MenuItem>
                                    </MenuList>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
                <div className="search-section">
                    <SearchField searchMovieByTitle={handleSearchMovies} />
                </div>
            </div>
            <div className="list-section">
                <MovieList
                    changeMovieItem={handleMovieItemChange}
                    listData={listData}
                />
                <MovieDetails movieDetails={movieDetails} />
            </div>
        </div>
    );
}

export default App;
