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
import { ImageBackground } from 'react-native-web';
import SecondSceen from './app/screens/SecondSceen';
import Navigation from './app/screens/Navigation';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ConfirmScreen from './app/screens/ConfirmScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
    paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight : 0,
  },
});
