import { StatusBar } from "expo-status-bar";
import { useNavigate } from "react-router-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TextInput } from "../../components/TextInput";
import { Icon } from "../../components/Icon/index.js";

export function Cadastro() {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/fundo.png")}
        style={styles.imageBackground}
      >
        <ImageBackground
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        ></ImageBackground>
        <View style={styles.form}>
          <TextInput
            icon="mail"
            label="e-mail"
            //onChangeText={(text) => handleChange(text, "email")}
            //value={formValue.email}
          />
          <TextInput
            icon="user"
            label="Username"
            //onChangeText={(text) => handleChange(text, "User")}
            //value={formValue.username}
          />
          <TextInput
            icon="key"
            iconFrom="FontAwesome5"
            label="Senha"
            //onChangeText={(text) => handleChange(text, "password")}
            //value={formValue.password}
          />
        </View>
        <TouchableOpacity>
            <Text style={styles.japossuo} onPress={() => navigate("/sign-in")}>
              já possuo conta
            </Text>
          </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("/cadastrod")}
        >
          <Text style={styles.login}>cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.div}>
        <Icon
          iconFrom={"AntDesign"}
          icon={"right"}
          style={styles.icon}
          color={"#FF4500"}
        ></Icon>
        <Icon
          iconFrom={"AntDesign"}
          icon={"right"}
          style={styles.icon}
          color={"#FF4500"}
        ></Icon>
        <Icon
          iconFrom={"AntDesign"}
          icon={"right"}
          style={styles.icon}
          color={"#FF4500"}
        ></Icon>
        </View>

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
    width: 150,
    height: 40,
    backgroundColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 5,
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
    paddingHorizontal: 70,
    maxHeight: 150,
    paddingTop: 70,
  },
  logo: {
    height: 200,
    width: 200,
  },
  japossuo:{
    color: "#FF4500",

  },
  div:{
    flexDirection:"row",
    margin:10,
  }
});
