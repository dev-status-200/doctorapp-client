import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Marker } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useGeolocated } from "react-geolocated";

const LocationMap = () => {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  console.log(coords, isGeolocationEnabled);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        accessToken:
          "pk.eyJ1IjoiYXN2ZHRoIiwiYSI6ImNscGtpbGpvczBib3oycWtleWw3NXB2aDYifQ.xHDXD6D8Dm9IDg_F27qEfQ",
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: coords && [
          coords.longitude || -0.09,
          coords.latitude || 51.505,
        ],
        zoom: 10,
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, coords]);
  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "80vw",
        height: "65vh",
      }}
    />
  );
};

export default LocationMap;
