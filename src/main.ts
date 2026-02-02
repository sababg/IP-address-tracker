import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { API_KEY } from "../apiKey";

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
const map = L.map("map").setView([51.505, -0.09], 13);

// Add tile layer from OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add a marker
const marker = L.marker([51.505, -0.09]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Hello!</b><br>This is your location.").openPopup();

async function initializeWithUserLocation() {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`,
    );
    const data = await response.json();

    const lat = data.location.lat;
    const lang = data.location.lng;
    map.setView([lat, lang], 13);
    marker.setLatLng([lat, lang]);
    marker
      .bindPopup(
        `<b>your location </b><br>${data.location.city} - ${data.location.country}`,
      )
      .openPopup();
    console.log("data", data);
  } catch (error) {
    console.error(error);
  }
}

initializeWithUserLocation();
