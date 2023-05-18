import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiZGVubmlzb2JlbCIsImEiOiJjbGhybmpvYXAwNWtxM2Zsb2FmNDR3OWo5In0.j9LQqzZXAPYO-gDM-rFRZQ");

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  mapContainer: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});

const Map = ({details}) => {
    const [location, setLocation] = useState({
        latitude: details.latitude,
        longitude: details.longitude,
    });
    
  useEffect(() => {
    // MapboxGL.setTelemetryEnabled(false)
    setLocation({
        latitude: -1.2717167,
        longitude: 36.8139821,
    })
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.mapContainer}>
        <MapboxGL.MapView center={location} zoom={15} style={styles.map} telemetry={false}/>
      </View>
    </View>
  );
};

export default Map;
