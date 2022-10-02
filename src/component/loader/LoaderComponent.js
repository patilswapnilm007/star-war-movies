import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function LoaderComponent(props) {
    return (
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}
            data-testid="loader"
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default LoaderComponent;
