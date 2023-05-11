import React, { TextInput as ReactTextInput, View } from "react-native";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const TextInput = (
  { label, value, onChangeText, icon, iconFrom },
  { ...rest }
) => {
  const handleIcon = () => {
    switch (true) {
      case iconFrom === "ant":
        return <AntDesign name={icon} style={styles.icon} color="#FF4500" />;
      case iconFrom === "FontAwesome5":
          return <FontAwesome5 name={icon} style={styles.icon} color="#FF4500" />;
      default:
        return <AntDesign name={icon} style={styles.icon} color="#FF4500" />;
    }
  };
  return (
    <View style={styles.searchSection}>
      <ReactTextInput
        style={styles.input}
        placeholder={label}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        underlineColorAndroid="transparent"
      />
      {icon && handleIcon()} 
    </View>
  );
};
