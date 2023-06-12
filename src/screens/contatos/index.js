import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Popup from "../../components/modal";
import Pressionavel from "../../components/pressable";
import { useNavigate } from "react-router-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "../../components/Icon/index.js";
export  function Contatos() {
 const navigate = useNavigate();
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#ebeaea",
        resizeMode: "cover",
      }}
    >
      <View
        animationType="slide"
        style={{
          width: "100%",
          height: "16%",
          padding: 8,
          backgroundColor: "#ff4900",
          justifyContent: "center",
          borderRadius: 17,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Contatos
        </Text>
      </View>
      <Popup></Popup>
      <View
        style={{
          width: "100%",
          height: "20%",
          backgroundColor: "#ebeaea",
          flexDirection:'row',
          
        }}
      >
        
        <Pressionavel> </Pressionavel>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigate("/home")}
        >
          <Text style={styles.login}><Icon
            iconFrom={"AntDesign"}
            icon={"back"}
            style={styles.icon}
            color={"white"}
          ></Icon></Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
  
  
}
const styles = StyleSheet.create({
  back:{
  width: 80,
  height: 55,
  backgroundColor: "#FF4500",
  borderWidth: 2,
  borderRadius: 28,
  borderColor: "#FF4500",
  alignItems:"center",

 
 

  }
});