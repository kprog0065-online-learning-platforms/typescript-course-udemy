/// <reference types="@types/google.maps" />

// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapDiv = document.getElementById(divId);

    if (!mapDiv) {
      throw new Error("Could not find the #map element.");
    }

    this.googleMap = new google.maps.Map(mapDiv, {
      center: { lat: 0, lng: 0 },
      zoom: 1,
      mapId: "DEMO_MAP_ID",
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addEventListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi there!",
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
