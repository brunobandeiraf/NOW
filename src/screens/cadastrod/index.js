import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TextInput } from "../../components/TextInput";
import { Icon } from "../../components/Icon/index.js";
import { useNavigate } from "react-router-native";

//import { useState } from "react";

//export default function Cadastrod() {
//const [formValue, setFormValue] = useState({
//nome: "",
// apelido: "",
// telefone: "",
//nascimento:"",

// });
//}
export function Cadastrod() {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/fundo.png")}
        style={styles.imageBackground}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        ></Image>
        <View style={styles.form}>
          <TextInput
            icon="signature"
            label="nome"
            //onChangeText={(text) => handleChange(text, "nome")}
            // value={formValue.nome}
          />

          <TextInput
            icon="user"
            label="apelido"
            //onChangeText={(text) => handleChange(text, "apelido")}
            // value={formValue.apelido}
          />

          <TextInput
            icon="phone"
            iconFrom="FontAwesome5"
            label="telefone"
            //onChangeText={(text) => handleChange(text, "telefone")}
            //value={formValue.telefone}
          />
          <TextInput
            icon="calendar-day"
            iconFrom="FontAwesome5"
            label="nascimento"
            //onChangeText={(text) => handleChange(text, "nascimento")}
            //value={formValue.nascimento}
          />
          <TextInput
            icon="id-card"
            iconFrom="FontAwesome5"
            label="cpf"
            //onChangeText={(text) => handleChange(text, "cpf")}
            // value={formValue.cpf}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("/Interesses")}
        >
          <Icon
          iconFrom={"AntDesign"}
          icon={"right"}
          style={styles.icon}
          color={"white"}
        ></Icon>
        </TouchableOpacity>

        <StatusBar style="auto" />
        

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 10000,
    borderColor: "#FF4500",
    alignItems: "center",
    paddingTop: 5,
    margin: 100,
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFf",
  },

  imageBackground: {
    flex: 1,
    position: "relative",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 100,
    maxHeight: 250,
    paddingTop: 70,
  },
  logo: {
    height: 200,
    width: 200,
  },
});
