import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Location } from "expo-location";
import { Icon } from "../../components/Icon/index.js";
import { getCurrentLocation } from "../../services/location";
import { useNavigate } from "react-router-native";
export function Home() {
  const navigate = useNavigate();
  const [region, setRegion] = useState({
    latitude: -27.443343492525734, 
    logintude: -48.369098876729645,
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
      <TouchableOpacity   
          onPress={() => navigate("/cadastrod")}
          style={styles.back}
          
      >
        <Icon
          iconFrom={"AntDesign"}
          icon={"back"}
          style={styles.icon}
          color={"white"}
        ></Icon>
      </TouchableOpacity>
     
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
  back:{
    width: 50,
    height: 50,
    backgroundColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 10000,
    borderColor: "#FF4500",
    justifyContent: "center",
    alignItems: "center",
    top:60,
    left:25,
    zIndex:100
  
  }
});





