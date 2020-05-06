import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({text}) => <div>{text}</div>;

const SimpleMap = (props) => {
    const [center, setCenter] = useState({lat: 28.6448, lng: 	77.216721 });
    const [zoom, setZoom] = useState(12);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBmHWg8ROQ-yAjJ8zcK9ie8qzjgsBb41h8'}}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={17.3850}
            lng={78.467}
            text="Your Location"
          />

          <Marker
            lat={28.6448}
            lng={77.216721}
            name="Risk Zone"
            color="blue"
          />

           <Marker
            lat={28.6}
            lng={77.2583}
            name="Covid Zone"
            color="red"
          />

           <Marker
            lat={28.4}
            lng={77.2772}
            name="Covid Zone"
            color="red"
          />

           <Marker
            lat={28.67}
            lng={77.7139}
            name="Covid Zone"
            color="red"
          />

          <Marker
            lat={28.68}
            lng={77.2139}
            name="Covid Zone"
            color="red"
          />

          <Marker
            lat={28.67}
            lng={77.2139}
            name="Covid Zone"
            color="red"
          />

          <Marker
            lat={28.63}
            lng={77.2139}
            name="Covid free Zone"
            color="green"
          />

          <Marker
            lat={28.64}
            lng={77.2139}
            name="Covid Zone"
            color="red"
          />

           <Marker
            lat={28.668}
            lng={77.2558}
            name="Covid free Zone"
            color="green"
          />

           <Marker
            lat={28.6640}
            lng={77.2658}
            name="Quarantine Zone"
            color="violet"
          />

        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;