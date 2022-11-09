import {Backdrop, CircularProgress} from '@mui/material';


export function Loader(props) {
    return (
        <Backdrop sx={
                {
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }
            }
            open={
                props.loading
        }>
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
}
