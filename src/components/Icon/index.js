import React, { View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const Icon = ({ icon, iconFrom, style, color}, { ...rest }) => {
  const handleIcon = () => {
    switch (true) {
      case iconFrom === "AntDesign":
        return <AntDesign name={icon} style={style} color={color} />;
      case iconFrom === "FontAwesome5":
        return <FontAwesome5 name={icon} style={style} color="#FF4500" />;
      default:
        return <AntDesign name={icon} style={style} color="#FF4500" />;
    }
  };
  return <View>{icon && handleIcon()}</View>;
};

