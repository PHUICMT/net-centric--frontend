import {useState} from "react";
import {MapContainer, TileLayer, useMapEvents, Marker} from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({iconUrl: icon, shadowUrl: iconShadow});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker(props) {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        locationfound() {
            map.locate()
        },
        click(e) {
            setPosition(e.latlng)
            props.setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        }
    })
    const icon = L.icon({
        iconSize: [
            25, 41
        ],
        iconAnchor: [
            10, 41
        ],
        popupAnchor: [
            2, -40
        ],
        iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
    });

    return position === null ? null : (
        <Marker icon={icon}
            position={position}/>
    )
}

export default function MyMap(props) {
    const style = {
        map: {
            height: '400px',
            width: '100%'
        }
    }

    function setPositionProps(position) {
        props.setPosition(position)
    }
    return (
        <MapContainer center={
                {
                    lat: 13.763395779624457,
                    lng: 100.46447753906251
                }
            }
            zoom={8}
            scrollWheelZoom={true}
            style={
                style.map
        }>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <LocationMarker setPosition={setPositionProps}/>
        </MapContainer>
    )
}
