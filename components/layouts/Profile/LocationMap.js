import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Marker } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useGeolocated } from "react-geolocated";
import axios from "axios";
import { Button, Dropdown, Input } from "antd";

const LocationMap = () => {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);

  const [searchTerm, setSearchTerm] = useState("asad");

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
        style: "mapbox://styles/mapbox/streets-v11",
        center: coords && [
          coords.longitude || -0.09,
          coords.latitude || 51.505,
        ],
        zoom: 10,
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, coords]);

  useEffect(() => {
    if (searchTerm.length > 4) {
      axios
        .get(
          `https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchTerm}&language=en&session_token=0581d294-1de3-4391-88c1-f56da930bf36&access_token=pk.eyJ1IjoiYXN2ZHRoIiwiYSI6ImNscGtpbGpvczBib3oycWtleWw3NXB2aDYifQ.xHDXD6D8Dm9IDg_F27qEfQ`
        )
        .then((r) => {
          console.log(r.data.suggestions);
        });
    }
  }, [searchTerm]);

  const handleSelectedSearch =(id)=>{
    axios
        .get(
          `https://api.mapbox.com/search/searchbox/v1/retrieve/${id}?session_token=0581d294-1de3-4391-88c1-f56da930bf36&access_token=pk.eyJ1IjoiYXN2ZHRoIiwiYSI6ImNscGtpbGpvczBib3oycWtleWw3NXB2aDYifQ.xHDXD6D8Dm9IDg_F27qEfQ`
        )
        .then((r) => {
          console.log(r.data.suggestions);
        });
  }

  return (
    <>
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
      <div className="">
        <Input onChange={(e) => setSearchTerm(e.target.value)} />
          {/* <DebounceInput/> */}
      </div>
    </>
  );
};

export default LocationMap;
