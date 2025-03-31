import { useState } from "react";
import  Marker  from "./marker";
import map from "./../../../../assets/map.png"

interface MarkerData {
  id: number;
  x: number;
  y: number;
}

interface ImageMapProps {
  markersData: MarkerData[];
  onSelectMarker: (id: number) => void;
}

export function ImageMap({ markersData, onSelectMarker }: ImageMapProps) {
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const handleSelectMarker = (id: number) => {
    setSelectedMarker(id);
    onSelectMarker(id);
  };

  return (
    <div style={{ position: "relative", width: "800px", height: "600px" }}>
      <img src={map} alt="Mapa" style={{ height: 555, display: "block" }} />

      {markersData.map((marker) => (
        <Marker
          key={marker.id}
          id={marker.id}
          x={marker.x}
          y={marker.y}
          isSelected={selectedMarker === marker.id}
          isHovered={hoveredMarker === marker.id}
          onClick={() => handleSelectMarker(marker.id)}
          onMouseEnter={() => setHoveredMarker(marker.id)}
          onMouseLeave={() => setHoveredMarker(null)}
        />
      ))}
    </div>
  );
};
