import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { ImageBackground } from 'react-native';
import { Home } from './screens/Home/Home';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import backgroundImg from './assets/background.png';
import { s } from './App.style';
import AlataRegular from './assets/fonts/Alata-Regular.ttf';
import {useFonts} from 'expo-font';


export default function App() {
const [isFontsLoaded] = useFonts({
		'Alata-Regular': AlataRegular,
	});

  return (
    <ImageBackground
      source={backgroundImg}
      style={s.img_background}
      imageStyle={s.img}>

      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontsLoaded ? <Home/> : null}          
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
