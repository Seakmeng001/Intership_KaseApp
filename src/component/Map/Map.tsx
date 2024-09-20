import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

// Define the props type
interface MapProps {
  isLoaded: boolean;
}

const Map: React.FC<MapProps> = ({ isLoaded }) => {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
  };

  const center = {
    lat: 12.5657,
    lng: 104.9910,
  };

  const anotherMarker = {
    lat: 11.8161,
    lng: 104.7375,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
      <Marker position={anotherMarker} />
    </GoogleMap>
  ) : null; // Return null or a loading indicator if not loaded
};

export default Map;
