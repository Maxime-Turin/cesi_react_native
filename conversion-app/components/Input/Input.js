import { useState } from 'react';
import {Text, TextInput} from 'react-native';
import { s } from './Input.style';

export function Input(){
const [number, onChangeNumber] = useState('0');

function onChangeInput(){
  onChangeNumber();
  console.log(number)
}

  return (
    <>
    <TextInput 
      style={s.input}
      onChangeText={onChangeNumber}
      value={number}
      keyboardType="numeric"
    />
    </>
  )
}