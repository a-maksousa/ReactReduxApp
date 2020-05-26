import React from "react"
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN });
const zoom = [2];

const MapBox = (props) => {

    return (
        <Map
            style="mapbox://styles/mapbox/streets-v8"
            zoom={zoom}
            center={[props.geo.lng, props.geo.lat]}
            containerStyle={{
                height: "280px",
                width: "100%"
            }}>
            <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[props.geo.lng, props.geo.lat]} />
            </Layer>
        </Map>
    )
}

export default MapBox;