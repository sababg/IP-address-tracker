import { API_KEY } from "../apiKey";
import { customMap, customMarker } from "./main";

export async function initializeWithUserLocation() {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`,
    );
    const data = await response.json();

    const lat = data.location.lat;
    const lang = data.location.lng;
    customMap.setView([lat, lang], 23);
    customMarker.setLatLng([lat, lang]);
    customMarker
      .bindPopup(
        `<b>your location </b><br>${data.location.city} - ${data.location.country}`,
      )
      .openPopup();
    console.log("data", data);
  } catch (error) {
    console.error(error);
  }
}
