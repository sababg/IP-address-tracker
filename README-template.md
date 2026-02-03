# IP Address Tracker

A responsive web application that allows users to search for and track IP addresses and domains, displaying their geographical location on an interactive map with detailed information.

![Design preview for the IP address tracker coding challenge](./images/screenshots/Screenshot%202026-02-02%20234754.png)

## Project Description

The app automatically fetches your current IP address using the IPify API and displays your location on the map and in the card information box. If the user enters an **IP** or **Domain** in the searchbox, the map and the card information box will be updated after clicking on the arrow button next to the search input. The US state abbreviations are automatically applied for a cleaner display.

##

## Features

- **IP Address Detection**: Automatically detects and displays your current IP address on initial load
- **IP/Domain Search**: Search for any IP address or domain name to get location details
- **Interactive Map**: View selected locations on a map powered by Leaflet.js
- **Detailed Information Display**: Shows IP address, location, timezone, and ISP/as name information
- **Responsive Design**: Optimized layout for all device sizes
- **Real-time Updates**: map markers and information cards are dynamic and will update on search

## Technologies Used

- **HTML5** - Semantic markup
- **SCSS/Sass** - Advanced CSS preprocessing
- **TypeScript** - Type-safe JavaScript
- **Leaflet.js** - Interactive mapping library
- **IPify API** - IP Geolocation data
- **Parcel** - Zero-configuration build tool

## How to View the Project

0. **Prerequisites**

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

1. **Clone the repository**

   ```bash
   git clone https://github.com/sababg/IP-address-tracker.git
   cd IP-address-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up API Key**

   **IMPORTANT**: You need a free API key from IPify to use this application.
   - [create API Key](https://geo.ipify.org/)
   - Create a file named apiKey.ts in the root directory
   - Add your API key

     ```typescript
     export const API_KEY = "your_api_key_here";
     ```

4. **Run the project**

   ```bash
   npm run dev
   ```

   The application will open at http://localhost:1234

## File Structure

```
IP-address-tracker/
├── src/
│   ├── main.ts              # Application entry point & map initialization
│   ├── getCurrentLocation.ts # Fetches IP geolocation data
│   ├── cardDetail.ts         # Updates information display cards
│   ├── searchInput.ts        # Handles search functionality
│   └── types.ts              # TypeScript type definitions
├── style/
│   └── style.scss            # Application styles
├── images/                   # Image assets and icons
├── design/                   # Design reference files
├── index.html                # Main HTML file
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── apiKey.ts                 # API key configuration (not in repo)
```

##

![Screenshot of the app](./images/screenshots/Screenshot%202026-02-02%20234754.png)
![Screenshot of the app](./images/screenshots/Screenshot%202026-02-02%20234858.png)
![Screenshot of the app](./images/screenshots/Screenshot%202026-02-02%20235013.png)
![Screenshot of the app](./images/screenshots/Screenshot%202026-02-02%20235036.png)

##

👤 Author
Saba Beigi
🌎 Charlotte, NC
💼 GitHub @sababg
📧 beigisaba@gmail.com

Feel free to reach out with questions, feedback, or ideas!
