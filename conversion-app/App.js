import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, Text, View } from 'react-native';
import { s } from './App.style';
import HotImg from './assets/hot.png';
import ColdImg from './assets/cold.png';
import {Input} from './components/Input/Input';
import { DisplayTemp } from './components/DisplayTemp/DisplayTemp';

const hot = HotImg;

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: "red", flex:1}}>
        <View style={s.container}>
          <ImageBackground source={hot} style={s.image}>
            <DisplayTemp/>
            <Input/>
          </ImageBackground>
          <StatusBar style="auto" />
    </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}


