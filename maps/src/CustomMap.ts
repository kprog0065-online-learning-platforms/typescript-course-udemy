/// <reference types="@types/google.maps" />

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
    });
  }
}
