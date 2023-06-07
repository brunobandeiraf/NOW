import React from "react";
import { View, Text, Modal } from "react-native";
import Popup from "../../components/modal";
import Pressionavel from "../../components/pressable";
import { useNavigate } from "react-router-native";
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
          flexDirection:'row-reverse',
          
        }}
      >
        <Pressionavel></Pressionavel>

      </View>
    </View>
  );
}