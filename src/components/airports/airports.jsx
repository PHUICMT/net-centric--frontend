import {useState, useEffect} from 'react';
import {
    ListSubheader,
    ListItemIcon,
    ListItemText,
    ListItem,
    List
} from '@mui/material';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

export function Airports(props) {
    const [airports, setAirports] = useState(null);

    useEffect(() => {
        setAirports(props.airports);
    }, [props.airports]);

    return(airports ? (
        <List sx={
                {
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper'
                }
            }
            subheader={
                <ListSubheader>Nearest Airports</ListSubheader>
        }>
            {
            airports && airports.map((airport) => (
                <ListItem key={
                    `${airport.name}_${airport.distance}`
                }>
                    <ListItemIcon>
                        <AirplaneTicketIcon/>
                    </ListItemIcon>
                    <ListItemText primary={
                            `Airport : ${
                                airport.name
                            }`
                        }
                        secondary={
                            `Distance from marked : ${
                                airport.distance
                            } km.`
                        }/>
                </ListItem>
            ))
        } </List>
    ) : null);
}
