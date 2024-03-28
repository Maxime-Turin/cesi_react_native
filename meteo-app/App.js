import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { ImageBackground } from 'react-native';
import { Home } from './screens/Home/Home';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import backgroundImg from './assets/background.png';
import { s } from './App.style';
import AlataRegular from './assets/fonts/Alata-Regular.ttf';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Forecast } from './screens/Forecast/Forecast';

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
const [isFontsLoaded] = useFonts({
		'Alata-Regular': AlataRegular,
	});

  return isFontsLoaded ? (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName='Home'
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Forecast" component={Forecast}/>
      </Stack.Navigator>         
      <StatusBar style="auto" />
    </NavigationContainer>
  ) : null;
}
