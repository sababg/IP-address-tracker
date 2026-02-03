import { API_KEY } from "../apiKey";
import { customMap, customMarker } from "./main";

export async function initializeWithUserLocation(ip?: string) {
  try {
    const url: string = ip
      ? ip.includes(".com")
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&&domain=${ip}`
        : `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&&ipAddress=${ip}`
      : `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    const lat = data.location.lat;
    const lang = data.location.lng;
    customMap.setView([lat, lang], 18);
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
