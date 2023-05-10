import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { Interesses } from './src/screens/interesses';
import { Login} from './src/screens/Login';
import { Router } from './Router';
import { UserProvider } from './src/contexts/UserContext';

export default function App() {
  return (
    <View style={styles.container}>
      <UserProvider>
        <Router></Router>
      </UserProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
