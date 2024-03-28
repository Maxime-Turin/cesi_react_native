import { Text, View } from "react-native";
import { s } from "./Home.style";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import {useNavigation} from '@react-navigation/native';
import { Container } from "../../components/Container/Container";




export function Home({}) {

const [coords, setCoords] = useState();
const [weather, setWeather] = useState();
const [city, setCity] = useState();
const currentWeather = weather?.current_weather;
const nav = useNavigation();

useEffect(() => {
  getUserCoords();
}, []);

useEffect(() => {
  if (coords) {
    fetchWeather(coords);
    fetchCity(coords)
  }
}, [coords]);

async function getUserCoords() {
  let { status } = await requestForegroundPermissionsAsync();

  if (status = 'granted') {
    const location = await getCurrentPositionAsync();
    setCoords({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  } else {
    setCoords({lat: '50.58', lng: '3.06'});
  };
};
console.log(coords);

async function fetchWeather(coords) {
  const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coords);
  setWeather(weatherResponse);
};
console.log(weather);

async function fetchCity(coords) {
  const cityResponse = await MeteoAPI.fetchCityFromCoords(coords);
  setCity(cityResponse);
};
console.log(city);

function goToForecastPage() {
  nav.navigate('Forecast', {city, ...weather.daily});
};

  return (
    <Container>
      {currentWeather ? (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic 
        temperature={Math.round(currentWeather?.temperature)}
        city={city}
        interpretation={getWeatherInterpretation(currentWeather.weathercode)}
        onPress={goToForecastPage}
      />
      </View>

      <View style={s.searchbar_container}>
        <Txt style={{fontSize: 60, color: 'white'}}>
          Barre de recherche
        </Txt>
      </View>

      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed}
          dusk={weather.daily.sunrise[0].split('T')[1]}
          dawn={weather.daily.sunset[0].split('T')[1]}
        />
      </View>
    </>
  ) : null}
    </Container>
  )
}