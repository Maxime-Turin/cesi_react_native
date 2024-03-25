import {Text, View} from 'react-native';
import { s } from './DisplayTemp.style';
import { constant } from '../../constant';

export function DisplayTemp(temp){
  temp = constant.tempConverted;
  return (
    <>
    <Text style={s.displayText}>{temp}</Text>
    </>
  )
}