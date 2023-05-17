import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text
} from "react-native";
import { TextInput } from "../../components/TextInput";
import { useNavigate } from "react-router-native";
import { Icon } from "../../components/Icon/index.js";

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
       <Text style={styles.info}>Dados Pessoais: </Text>
       <Icon
            iconFrom={"AntDesign"}
            icon={"user"}
            style={styles.iconInfo}
            color={"white"}
            
        ></Icon>
        
        
          <View style={styles.form}>
          <TextInput
           
            label="nome"
            //onChangeText={(text) => handleChange(text, "nome")}
            // value={formValue.nome}
          />

          <TextInput
          
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
            onPress={() => navigate("/interesses")}
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
  info:{
    alignItems:"center",
    fontSize: 30,
    color: "#FFf",
    margin:20

  },
  iconInfo:{
    padding:10,
    fontSize:40,
    fontWeight: "bold",
  },
  icon:{
    padding:18,
    fontSize:50,

  }}
);
