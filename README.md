# Deco3500-team-project
# Travel with Me - Collaborative Travel Planning for Young People

## Project Description
"Travel with Me" is a collaborative travel planning platform designed for young people. It allows users to jointly add and edit travel itineraries, particularly for those who enjoy traveling in groups. Real-time collaboration on the travel timeline is implemented using WebSocket technology, while other features are prototyped interactively using Figma to provide a comprehensive user experience.

## Installation Guide and Usage Instructions

### 1. Install Environment
Ensure Node.js and npm are installed on your system. If not, visit the [Node.js official website](https://nodejs.org/) to download and install the latest LTS version (recommended for better stability).

### 2. Install WebSocket (ws) Module
Run the following command in the project directory to install the WebSocket module:

```bash
npm install ws
```

### 3. Configure IP Address
Open the `explore.js`, `map.js`, and `plans.js` files in the project directory, and replace the IP address `172.20.10.6` with your mobile hotspot's actual IP address. This setup allows all client devices to connect to the WebSocket server within the same local area network (LAN).

### 4. Set Up LAN Connection
- Turn on your mobile hotspot and connect your MacBook and other devices to it.
- Locate the `package.json` file in the project directory and run the "debug" script to start the debugging mode.
- Other devices can access the web page using the IP address you set, enabling real-time collaboration.

## Usage
After establishing a local area network using the mobile hotspot, all devices will be synchronized with the WebSocket server to enable real-time collaborative travel planning and discussion.
