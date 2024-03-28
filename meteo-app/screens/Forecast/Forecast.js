import { Txt } from "../../components/Txt/Txt";
import {s} from './Forecast.style.js';
import { Container } from "../../components/Container/Container.js";
import {useRoute} from '@react-navigation/native';

export function Forecast({}) {
  const{params} = useRoute();
  return (
    <>
    <Container>
      <Txt>Forecast</Txt>
    </Container>      
    </>
  )
}