import { Data } from "./types";

export const cardDetail = (data: Data): void => {
  const ipAddress = document.getElementById("ip-address");
  const location = document.getElementById("location");
  const timezone = document.getElementById("timezone");
  const isp = document.getElementById("isp");

  if (
    !(ipAddress instanceof HTMLParagraphElement) ||
    !(location instanceof HTMLParagraphElement) ||
    !(timezone instanceof HTMLParagraphElement) ||
    !(isp instanceof HTMLParagraphElement)
  ) {
    throw new Error("elements not found");
  }

  const getData = () => {
    ipAddress.textContent = data.ip;
    location.textContent = `${data.location.city}, ${US_STATE_ABBREVIATIONS[data.location.region]} ${data.location.postalCode}`;
    timezone.textContent = `UTC ${data.location.timezone}`;
    isp.textContent = data.isp;
  };

  return getData();
};

const US_STATE_ABBREVIATIONS: Record<string, string> = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};
