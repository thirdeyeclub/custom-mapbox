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
    width: '700px',
    height: '640px',
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 8
  });
// cannot ge token to work for some reason
const TOKEN = "pk.eyJj2";
return (
  <>
        <div className="rpgui-content">
        <nav className="framed rpgui-draggable">
          <button href="#">Compare</button>
        </nav>
    <div className="fluid-container">
      <div className="map">
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
      <div className="side">
        <div className="sideHigh">high</div>
        <div className="sideLow">low</div>
      </div>
    </div>
  </div>
  </>
