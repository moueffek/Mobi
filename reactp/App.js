import { 
  StyleSheet,
  StatusBar ,
  SafeAreaView,
  Platform,
  Image,
  text,
  View,
  Dimensions
} from 'react-native';
import Navigation from './app/screens/Navigation';
import { NativeBaseProvider } from 'native-base';



export default function App() {
  return (
    <NativeBaseProvider style={styles.container}>
      <Navigation/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
    paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight : 0,
  },
});
