import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const tileLayer =
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";
const attribution = `&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`;

const Map = ({ width, height }) => {
  return (
    <MapContainer
      center={[43.43126213626366, 3.5521666306899644]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: height || "300px",
        width: width || "100%",
        zIndex: "0",
        maxHeight: "70vh",
      }}
    >
      <TileLayer attribution={attribution} url={tileLayer} />
      <Marker position={[43.43126213626366, 3.5521666306899644]}></Marker>
    </MapContainer>
  );
};

export default Map;
