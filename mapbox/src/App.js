import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import * as earthquake from './data/earthquakes.json';
import { MapPin } from 'styled-icons/fa-solid/MapPin';
import styled from 'styled-components';
import './App.css';

export default function App() {
  const RedPin = styled(MapPin)`
    height: 20px;
    width: 20px;
    color: red;
  `;

  const [viewport, setViewport] = useState({
    width: '800px',
    height: '800px',
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 8
  });

  return (
    <div className="map">
      <p />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/thirdeyeclub/cjutdopu33db01fmsym0vr1pi"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {earthquake.features.map(quake => (
          <Marker
            key={quake.id}
            latitude={quake.geometry.coordinates[1]}
            longitude={quake.geometry.coordinates[0]}
          >
            <button>
              <RedPin />
            </button>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}