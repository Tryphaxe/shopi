"use client";

import React, { useRef, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, TrafficLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function Carte() {
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null); // État pour la position de l'utilisateur
  const [zoom, setZoom] = useState(15); // État pour le niveau de zoom
  const [error, setError] = useState(null);

  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  const handleMarkerClick = (event) => {
    console.log('Marker clicked:', event);
  };

  const handleZoomIn = () => {
    if (mapRef.current) {
      const newZoom = zoom + 1;
      setZoom(newZoom);
      mapRef.current.setZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      const newZoom = zoom - 1;
      setZoom(newZoom);
      mapRef.current.setZoom(newZoom);
    }
  };

  // Fonction pour centrer la carte sur la position actuelle de l'utilisateur
  const handleLocateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(userLocation); // Mise à jour de la position
          mapRef.current.panTo(userLocation); // Centre la carte sur la position de l'utilisateur
        },
        (error) => {
          setError("Impossible d'obtenir la position.");
          console.error(error);
        }
      );
    } else {
      setError("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setError("Impossible d'obtenir la position.");
          console.error(error);
        }
      );
    } else {
      setError("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      {location ? (
        <div className="h-full w-full">
          {/* Boutons de contrôle de zoom personnalisés */}
          <div className="absolute bottom-4 right-4 z-10 flex flex-col space-y-2">
            <button
              onClick={handleLocateUser}
              className="bg-orange-500 text-white p-2 rounded shadow-md hover:bg-orange-600"
            >
              <i className="fa-solid fa-location-crosshairs"></i>
            </button>
            <button
              onClick={handleZoomIn}
              className="bg-orange-500 text-white p-3 rounded shadow-md hover:bg-orange-600"
            >
              <i className='fa-solid fa-plus'></i>
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-orange-500 text-white p-3 rounded shadow-md hover:bg-orange-600"
            >
              <i className='fa-solid fa-minus'></i>
            </button>
          </div>

          {/* Carte Google Maps */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={zoom}
            onLoad={handleMapLoad}
            options={{
              zoomControl: false,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: true,
              minZoom: 8,
              maxZoom: 20,
            }}
          >
            <Marker
              position={location}
              onClick={handleMarkerClick}
            />
            <TrafficLayer />
          </GoogleMap>
        </div>
      ) : (
        <p>Chargement de la carte...</p>
      )}
      {error && <p>{error}</p>}
    </LoadScript>
  );
}

export default Carte;