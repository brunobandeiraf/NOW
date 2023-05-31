import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Location } from "expo-location";
import { getCurrentLocation } from "../../services/location";
import { BottomSheetComponente } from "../../components/BottomSheet";

export function Home() {
  const [region, setRegion] = useState({
    latitude: -27.4399839,
    longitude:  -48.3955295,
    latitudeDelta: -27.443343492525734, 
    logintudeDelta: -48.369098876729645,
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getCurrentLocation()
  }, []);


  return (
    <View style={styles.container}>
      <Text> top </Text>
      {region && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: -27.4399839,
            longitude:  -48.3955295,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{
            latitude: -27.4399839,
            longitude:  -48.4955295,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
              <TouchableOpacity onPress={()=>{console.log("location")}}><Text>0000</Text></TouchableOpacity>
          </Marker>

        </MapView>
      )}
     
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});








// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
// import MapView, { Marker } from 'react-native-maps';

// const UserDistanceMap = () => {
//   const [user1Location, setUser1Location] = useState('');
//   const [user2Location, setUser2Location] = useState('');
//   const [distance, setDistance] = useState('');

//   useEffect(() => {
//     // Função para obter a localização atual do usuário
//     const getCurrentLocation = () => {
//       Geolocation.getCurrentPosition(
//         position => {
//           const { latitude, longitude } = position.coords;
//           setUser1Location({ latitude, longitude });
//         },
//         error => {
//           console.log('Erro ao obter a localização:', error.message);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     };

//     // Obter a localização do usuário 2 (simulado)
//     setUser2Location({ latitude: 37.78925, longitude: -122.4324 });

//     // Chamar a função para obter a localização do usuário 1
//     getCurrentLocation();
//   }, []);

//   useEffect(() => {
//     // Calcular a distância entre as localizações dos usuários
//     if (user1Location && user2Location) {
//       const distanceInMeters = calculateDistance(user1Location, user2Location);
//       setDistance(distanceInMeters);
//     }
//   }, [user1Location, user2Location]);

   // Função para calcular a distância entre duas coordenadas em metros
  // const calculateDistance = (location1, location2) => {
  //   const { latitude: lat1, longitude: lon1 } = location1;
  //   const { latitude: lat2, longitude: lon2 } = location2;
  //   const earthRadius = 6371; // Raio médio da Terra em quilômetros

  //   const dLat = degreesToRadians(lat2 - lat1);
  //   const dLon = degreesToRadians(lon2 - lon1);

  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(degreesToRadians(lat1)) *
  //       Math.cos(degreesToRadians(lat2)) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   const distanceInKm = earthRadius * c;
  //   const distanceInMeters = distanceInKm * 1000;

  //   return distanceInMeters;
  // };
