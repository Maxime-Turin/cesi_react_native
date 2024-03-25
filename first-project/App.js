import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {s} from './App.style';

import {User} from './components/User';
import { FlexDemo } from './components/FlexDemo';
import { ScoreCounter } from './components/ScoreCounter';
import { Child } from './components/Child';


export default function App() {
  const [age, setAge] = useState(0);

  function hello(name){
    setAge(age+1);
  }

  console.log(age);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: "red", flex:1}}>
        <View style={s.square}>
          {Platform.OS ==="ios" ? (
            <Text>IOS</Text>
          ) : (
            <Text>Android</Text>
          )}
        </View>
        {/* <View style={s.square}>
          <Child onPress={hello}></Child>
        </View> */}
        
        {/* <View style={s.square}>
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
        </View> */}
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
