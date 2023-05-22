import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Location } from "expo-location";
export function Home() {
  const [region, setRegion] = useState({
    latitude: -27.443343492525734, 
    logintude: -48.369098876729645,
    latitudeDelta: -27.443343492525734, 
    logintudeDelta: -48.369098876729645,
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        
        let location = await Location.getCurrentPositionAsync({});
        console.log("oi");
        setLocation(location);
    })();
  }, []);


  return (
    <View style={styles.container}>
      <Text>Top</Text>
      {region && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: -27.548288,
            longitude:  -48.499018,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{
            latitude: -27.548288,
            longitude:  -48.499018,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            {location && (
              <TouchableOpacity onPress={()=>console.log(location)} >aaa</TouchableOpacity>
            )}
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