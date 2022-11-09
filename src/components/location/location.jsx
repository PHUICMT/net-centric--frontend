import {useState, useEffect} from 'react';
import {
    ListSubheader,
    ListItemIcon,
    ListItemText,
    ListItem,
    List
} from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';

export function Location(props) {
    const [latitute, setLatitute] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        setLatitute(props.latitute);
        setLongitude(props.longitude);
    }, [props.latitute, props.longitude]);

    return (
        <List sx={
                {
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper'
                }
            }
            subheader={
                <ListSubheader>Location</ListSubheader>
        }>

            <ListItem key="lat">
                <ListItemIcon>
                    <MyLocationIcon/>
                </ListItemIcon>
                <ListItemText primary={"latitute"}
                    secondary={latitute}/>
            </ListItem>
            <ListItem key="long">
                <ListItemIcon>
                    <></>
                </ListItemIcon>
                <ListItemText primary={"longitude"}
                    secondary={longitude}/>
            </ListItem>
        </List>
    );
}
