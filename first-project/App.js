import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {User} from './components/User';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {s} from './App.style';
import { FlexDemo } from './components/FlexDemo';
import { ScoreCounter } from './components/ScoreCounter';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: "red", flex:1}}>
        <View style={s.square}>
          <User
            firstName={'John'}
            lastName={'Doe'}
            age={40}
            address={{street: '12 Avenue du machintruc', city: 'BakelCityGang'}}
            isVerified={true}
            doSomething={function (){
              console.log('User authenticated')
            }}         
          >
            <Image
              style={{height: 200, width: 300}}
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            />
          </User>
          <ScoreCounter />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

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
