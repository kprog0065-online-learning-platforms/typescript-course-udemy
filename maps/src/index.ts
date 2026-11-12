/// <reference types="@types/google.maps" />

(window as any).initMap = () => {
  const mapDiv = document.getElementById("map");

  if (!mapDiv) {
    console.error("Could not find the #map element.");
    return;
  }

  new google.maps.Map(mapDiv, {
    center: { lat: 0, lng: 0 },
    zoom: 1,
  });
};