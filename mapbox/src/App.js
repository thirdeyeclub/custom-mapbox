import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import * as earthquake from './data/earthquakes.json';
import { MapPin } from 'styled-icons/fa-solid/MapPin';
import styled from 'styled-components';
import './App.css';

//APP
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
// cannot ge token to work for some reason
const TOKEN = "pk.eyJ1IjoidGhpcmRleWVjbHViIiwiYSI6ImNqdXRhcTFlcDA2M2c0ZXBoa203YWpydmgifQ.vtmP3IjAz4xH3412uQkj2";

  return (
    <div className="map">
      <h1>Map</h1>
      <p />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/thirdeyeclub/cjv3e2kv60j5g1fqxc07ftk4f"
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