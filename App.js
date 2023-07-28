import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet, Text } from 'react-native';
import { isDevice } from 'expo-device';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null })

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !isDevice) {
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const userlocation = await Location.getCurrentPositionAsync({});

      setCoordinates({ lat: userlocation.coords.latitude, lon: userlocation.coords.longitude })
    })();
  }, [coordinates.lat]);

  return (
    <View style={styles.container}>
      {
        coordinates.lat != null
          ? <MapView style={styles.map} initialRegion={{
            latitude: coordinates.lat,
            longitude: coordinates.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker
            coordinate={{
              latitude: coordinates.lat,
              longitude: coordinates.lon,
            }}
            title="User Location"
            description="This is the user's location marker."
          />
          </MapView> 
          :
           <MapView style={styles.map} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default App ;