import {Text, Image} from "react-native";

export function User({firstName, lastName, age, isVerified, address, children, doSomething}){
  doSomething();
  return <>
  {children}

  <Text>
    Mon prénom est {firstName} et mon nom est {lastName}.{'\n'}
    J'ai {age} ans.{'\n'}
    {isVerified ? 'Compte vérifié' : 'Compte pas vérifié'}
  </Text>

  <Text>
    Mon adresse est : {address.street} à {address.city}
  </Text>
  </> 
}