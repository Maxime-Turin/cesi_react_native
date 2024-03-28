import { View } from "react-native";
import {
  s,
  StyledContainer,
  StyledLabel,
  StyledValue,
} from './MeteoAdvanced.style.js';

export function MeteoAdvanced({dusk, dawn, wind}) {

  return(
    <View style={s.container}>
      <StyledContainer>
        <StyledValue>{dusk}</StyledValue>
        <StyledLabel>Aube</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{dawn}</StyledValue>
        <StyledLabel>Crépuscule</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{wind}</StyledValue>
        <StyledLabel>Vent</StyledLabel>
      </StyledContainer>
    </View>
  )
}