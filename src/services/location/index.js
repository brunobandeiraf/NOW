import * as Location from 'expo-location';

// Função para obter a localização atual do usuário

export const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão de localização negada');
      return;
    }
  
    let location = await Location.getCurrentPositionAsync({});
    console.log('Localização:', location.coords);
    return   {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
};

