import React, { useRef, useEffect, useState, memo } from "react";
import { useGeolocated } from "react-geolocated";
import mapboxgl, { Marker } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const LocationMap = ({ setLocation, location }) => {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });

  const markerRef = useRef(null);

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0 && coords) {
      coordinates.latitude = coords.latitude;
      coordinates.longitude = coords.longitude;
    }
    if (location.latitude != 0 && location.longitude != 0) {
      coordinates.latitude = location.latitude;
      coordinates.longitude = location.longitude;
    }

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        accessToken:
          "pk.eyJ1IjoiYXN2ZHRoIiwiYSI6ImNscGtpbGpvczBib3oycWtleWw3NXB2aDYifQ.xHDXD6D8Dm9IDg_F27qEfQ",
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 15,
      });
      map.on("load", async () => {
        setMap(map);
        map.resize();
        new Marker()
          .setLngLat([coordinates.longitude, coordinates.latitude])
          .addTo(map);
      });
      map.on("click", (e) => {
        // Remove previous marker if it exists
        if (markerRef.current) {
          markerRef.current.remove();
        }

        // Access the coordinates from the click event
        const coordinate = e.lngLat.toArray();
        setLocation({ longitude: coordinate[0], latitude: coordinate[1] });

        // Create a new marker at the clicked coordinates
        const newMarker = new Marker().setLngLat(coordinate).addTo(map);
        markerRef.current = newMarker;
      });

      // Cleanup on component unmount
      return () => {
        map.remove();
      };
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, coords]);

  return (
    <>
      <div
        ref={(el) => (mapContainer.current = el)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          maxWidth: "100%",
          height: "73.5vh",
        }}
      />
    </>
  );
};

export default memo(LocationMap);
