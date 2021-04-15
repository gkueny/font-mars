import React from "react";

const tileLayer = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;
const mapId = "contact-map";

const Map = ({ className }) => {
  const [rand, setRand] = React.useState(0);
  React.useEffect(() => {
    if (typeof window !== "undefined" && window && window.L) {
      const map = window.L.map(mapId).setView(
        [43.43026213626366, 3.5513666306899644],
        13
      );
      window.L.tileLayer(tileLayer, {
        attribution,
      }).addTo(map);

      window.L.marker([43.43026213626366, 3.5513666306899644]).addTo(map);
    } else {
      setTimeout(() => {
        setRand((rand) => rand + 1);
      }, 500);
    }
  }, [rand]);

  return <div id={mapId} className={className}></div>;
};

export default Map;
