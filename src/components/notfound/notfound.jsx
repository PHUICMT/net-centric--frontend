import {useState, useEffect} from "react";

export function NotFound(props) {
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setNotFound(props.notFound);
    }, [props.notFound]);

    return(notFound ? (
        <div className="notfound">
            <h1>Data Not Found...</h1>
            <img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" alt="not_found"/>
        </div>
    ) : (
        <div className="found">
            <h1>Select on the map...</h1>
            <img width="200px" src="https://icon-library.com/images/find-me-icon/find-me-icon-25.jpg" alt="select_location"/>
        </div>
        ));
}
