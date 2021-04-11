import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const tileLayer =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

const isClient = typeof window === "object";

const Map = ({ width, height }) => {
  if (!isClient) {
    return <p className="text-gray-900 text-xl">Chargement de la carte...</p>;
  }
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
