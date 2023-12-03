import React, { useRef, useEffect, useState, memo } from "react";
import axios from "axios";
import { useGeolocated } from "react-geolocated";
import mapboxgl, { Marker } from "mapbox-gl";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "mapbox-gl/dist/mapbox-gl.css";
import Modal from "./Modal";

const LocationMap = () => {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      coordinates.latitude = coords.latitude;
      coordinates.longitude = coords.longitude;
      setShow(true)
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
        new Marker().setLngLat( [coordinates.longitude, coordinates.latitude]).addTo(map);
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, coords]);

  return (
    <>
      <div
        className="map"
        ref={(el) => (mapContainer.current = el)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          width: "80vw",
          height: "73.5vh",
        }}
      />
      <Modal
        show={show}
        setShow={setShow}
        footer={true}
        title={'Conirm your location'}
        backdrop={'static'}
        primary_text={"Save"}
        loading={loading}
        keyboard={false}
      >
        <p>Is this your current location?</p>
      </Modal>
    </>
  );
};

export default memo(LocationMap);
