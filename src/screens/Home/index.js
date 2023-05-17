import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { Location } from "react-router-native";
export function Home() {
  const [region, setRegion] = useState({
    latitude: -27.443343492525734, 
    logintude: -48.369098876729645,
    latitudeDelta: -27.443343492525734, 
    logintudeDelta: -48.369098876729646,
  });

  // const getCurrentPosition = async () => {
  //   let { status } = await Location.requestPermissionsAsync();

  //   if (status !== "granted") {
  //     Alert.alert("Ops!", "Permissão de acesso a localização negada.");
  //   }

  //   let {
  //     coords: { latitude, longitude },
  //   } = await Location.getCurrentPositionAsync();

  //   setRegion({ latitude, longitude, latitudeDelta: 100, longitudeDelta: 100 });
  // };
  // useEffect(() => {
  //   getCurrentPosition();
  // }, []);
  return (
    <View style={styles.container}>
      <Text>Top</Text>
      {region && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{...region}}
        >
          <Marker coordinate={{...region}}>
            <Text>pitbull</Text>
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
