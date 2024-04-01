import { TouchableOpacity } from "react-native";
import {useRoute, useNavigation} from '@react-navigation/native';
import { s } from "./ForecastBackButton.style";
import { Txt } from "../Txt/Txt";

export function ForecastBackButton({}) {
  const nav = useNavigation();

    return (
    <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );
}