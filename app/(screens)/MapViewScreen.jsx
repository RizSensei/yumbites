import { View, Text, Alert, StyleSheet, Platform } from "react-native";
import React, { useRef, useState } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useCalculateDistance } from "../../hooks/useCalculateDistance";
import { TouchableOpacity } from "react-native";

const MapViewScreen = () => {
  const mapRef = useRef();
  const restaurantLocationPin = {
    latitude: 27.736,
    longitude: 85.3601,
  };
  const [myLocationPin, setMyLocationPin] = useState({
    latitude: 27.75,
    longitude: 85.39,
  });

  const { distance } = useCalculateDistance({
    lat1: restaurantLocationPin.latitude,
    long1: restaurantLocationPin.longitude,
    lat2: myLocationPin.latitude,
    long2: myLocationPin.longitude,
  });

  // const markers = [
  //   {
  //     latitude: 37.7749,
  //     longitude: -122.4194,
  //     latitudeDelta: 0.01,
  //     longitudeDelta: 0.01,
  //     name: "San Francisco City Center",
  //   },
  //   {
  //     latitude: 37.8077,
  //     longitude: -122.475,
  //     latitudeDelta: 0.01,
  //     longitudeDelta: 0.01,
  //     name: "Golden Gate Bridge",
  //   },
  // ];

  const INITIAL_REGION = {
    latitude: 27.736,
    longitude: 85.3601,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  // const onRegionChange = (region) => {
  //   console.log(region);
  // };

  // const onMarkerSelected = (marker) => {
  //   Alert.alert(marker.name);
  // };

  // const calloutPressed = (ev) => {
  //   console.log(ev);
  // };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
      >
        <Marker coordinate={restaurantLocationPin} pinColor="#15803D">
          <Callout
          >
            <View style={{ padding: 5 }}>
              <Text style={{ fontSize: 12 }}>We are happy to have you!</Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          draggable
          coordinate={myLocationPin}
          onDragEnd={(e) => {
            setMyLocationPin(e.nativeEvent.coordinate);
          }}
        />
      </MapView>

      <View style={{position:'absolute', bottom:5, width:'100%'}}>
        <View style={{backgroundColor:'white', borderRadius:12,flexDirection:'column', justifyContent:'center', alignItems:'center', marginHorizontal:12, paddingHorizontal:12, paddingVertical:20}}>
          <Text style={{fontSize:15, fontWeight:'semibold'}}>
            You are {distance} km away from us
          </Text>
          <Text style={{ fontSize:10, color:'gray' }}>Drag the marker to pin your location</Text>
        </View>
      </View>
    </View>
  );
};

export default MapViewScreen;
