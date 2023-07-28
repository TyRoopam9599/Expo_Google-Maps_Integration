# Expo_Google-Maps_Integration
The "Live Location Tracker with Expo React Native and Google Maps" project is a mobile application that allows users to track and view their live location on a map using their smartphone. The app is built using Expo, a popular framework for developing React Native applications, and it utilizes the Google Maps API to display the interactive map. 

## Key Features
- _Live Location Tracking:_ Get the user's live location using Expo's location module and display it on the map in real-time.
- _Google Maps Integration:_ Interactive map powered by the Google Maps API, showing the user's live location with a marker.
- _Dynamic Map Zoom:_ The map is automatically zoomed to an appropriate level based on the user's location.
- _User-Friendly Interface:_ A simple and intuitive interface with loading indicators for location fetching.


## Dependencies
  - expo: "~49.0.5",
  - expo-status-bar: "~1.6.0",
  - react-native: "0.72.3",
  - react-native-maps: "1.7.1",
  - expo-location: "~16.1.0",
  - expo-device: "~5.4.0"

## Running the App:
To run the app on a local development server,
1. Clone the repo: `git clone https://github.com/TyRoopam9599/Expo_Google-Maps_Integration.git`
2. Navigate to the project directory: `cd Expo_Google-Maps_Integration`
3. Install the dependencies: `npm install`
4. Start the Expo development server: `npx expo start`
5. Use the `Expo Go` app on your device to scan the QR code from the Expo development server. This will open the app on your device.

## Configuration
Before running the app, you need to obtain a Google Maps API key and add it to the android/app/src/main/AndroidManifest.xml file as shown in the Google Maps API documentation.

## Acknowledgments
- This project was inspired by Expo and the Google Maps API.
- Special thanks to the Expo and React Native Maps teams for their excellent tools and libraries.
