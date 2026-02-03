import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { initializeWithUserLocation } from "./getCurrentLocation";
import { initSearch } from "./searchInput";

// Fix for default marker icon - import as URLs
const iconDefault = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = iconDefault;
// Set default icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
// Initialize the map
export const customMap = L.map("map").setView([51.505, -0.09], 18);

// Add tile layer from OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(customMap);

// Add a marker
export const customMarker = L.marker([51.505, -0.09]).addTo(customMap);

// Add a popup to the marker
customMarker.bindPopup("<b>Hello!</b><br>This is your location.").openPopup();

initializeWithUserLocation();

initSearch((ip) => {
  console.log("IP from search.ts:", ip);
  initializeWithUserLocation(ip);
});
