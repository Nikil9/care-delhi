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
            lat={19.0168}
            lng={78.4867}
            name="Risk Zone"
            color="blue"
          />

           <Marker
            lat={14.3984}
            lng={75.5583}
            name="Covid Zone"
            color="red"
          />

           <Marker
            lat={12.4435}
            lng={45.3772}
            name="Covid Zone"
            color="red"
          />

           <Marker
            lat={19.7515}
            lng={75.7139}
            name="Covid Zone"
            color="red"
          />

           <Marker
            lat={25.168}
            lng={72.9558}
            name="Covid free Zone"
            color="green"
          />

           <Marker
            lat={17.3850}
            lng={80.9558}
            name="Quarantine Zone"
            color="violet"
          />

        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;