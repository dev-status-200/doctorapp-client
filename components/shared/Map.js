import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useGeolocated } from "react-geolocated";
import mapboxgl, { Marker } from "mapbox-gl";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "mapbox-gl/dist/mapbox-gl.css";

const LocationMap = () => {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchedSuggestions, setSearchedSuggestions] = useState([]);
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [marker, setMarker] = useState(null);

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
    }

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        accessToken:
          "pk.eyJ1IjoiYXN2ZHRoIiwiYSI6ImNscGtpbGpvczBib3oycWtleWw3NXB2aDYifQ.xHDXD6D8Dm9IDg_F27qEfQ",
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 10,
      });
      map.on("load", async () => {
        setMap(map);
        map.resize();
      });
      map.on('click', 'accesspoints-data-layer', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['accesspoints-data-layer'],
        });
        console.log(features, 'features');
        if (features.length > 0) {
          const clickedFeature = features[0];
          setSelectedFeature(clickedFeature);
        }
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, coords]);
  console.log(selectedFeature)
  useEffect(() => {
    if (searchTerm.length > 4) {
      axios
        .get(
          `https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchTerm}&language=en&session_token=0581d294-1de3-4391-88c1-f56da930bf36&access_token=pk.eyJ1IjoiYXN2ZHRoIiwiYSI6ImNscGtpbGpvczBib3oycWtleWw3NXB2aDYifQ.xHDXD6D8Dm9IDg_F27qEfQ`
        )
        .then((r) => {
          setSearchedSuggestions(r.data.suggestions);
        });
    }
    if (searchTerm.length === 0) {
      setSearchedSuggestions([]);
    }
  }, [searchTerm]);

  const handleSelectedSearch = (id) => {
    axios
      .get(
        `https://api.mapbox.com/search/searchbox/v1/retrieve/${id}?session_token=0581d294-1de3-4391-88c1-f56da930bf36&access_token=pk.eyJ1IjoiYXN2ZHRoIiwiYSI6ImNscGtpbGpvczBib3oycWtleWw3NXB2aDYifQ.xHDXD6D8Dm9IDg_F27qEfQ`
      )
      .then((r) => {
        console.log(r.data.features[0].geometry.coordinates);

        if (r.data.features[0].geometry) {
          const coordinates = {
            lng: r.data.features[0].geometry.coordinates[0],
            lat: r.data.features[0].geometry.coordinates[1],
          };

          if (marker) {
            marker.remove();
          }
          const newMarker = new Marker().setLngLat(coordinates).addTo(map);
          setMarker(newMarker);
          map.flyTo({
            center: coordinates,
            zoom: 14,
          });
        }
      });
  };

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
      <div className="map-search mt-3">
        <Input
          color="white"
          className="custom-focus rounded"
          prefix={<SearchOutlined />}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="rounded">
          {searchedSuggestions.map((item, i) => {
            return (
              <li
                onClick={() => {
                  handleSelectedSearch(item.mapbox_id);
                }}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LocationMap;
