import { StyleSheet, View } from 'react-native';
import { Router } from './Router';
import { UserProvider } from './src/contexts/UserContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{flex:1, width: '100%'}}>
      <UserProvider>
        <Router></Router>
      </UserProvider>
      </GestureHandlerRootView>
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