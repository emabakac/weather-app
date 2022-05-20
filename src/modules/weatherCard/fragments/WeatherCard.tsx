import React, { useState, useEffect } from "react";
import { WeatherCardComponent } from "../../../modules";
import { Location, WeatherData } from "../../main/fragments/App";

interface Props {
  weatherData: WeatherData;
  showFahrenheit: boolean;
  setShowFahrenheit: React.Dispatch<React.SetStateAction<boolean>>;
  showWeatherCard: boolean;
  setShowWeatherCard: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  searchQuery: Location;
  setSearchQuery: React.Dispatch<React.SetStateAction<Location>>;
}

export interface Temperature {
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
}

const WeatherCard: React.FC<Props> = ({
  weatherData,
  showFahrenheit,
  setShowFahrenheit,
  showWeatherCard,
  setShowWeatherCard,
  isLoading,
  searchQuery,
  setSearchQuery,
}) => {
  const [celsius, setCelsius] = useState<Temperature>({
    temperature: 0,
    minTemperature: 0,
    maxTemperature: 0,
  });

  const [fahrenheit, setFahrenheit] = useState<Temperature>({
    temperature: 0,
    minTemperature: 0,
    maxTemperature: 0,
  });

  const convertKelvinToFahrenheit = (): void => {
    const fahrenheitTemperature =
      ((weatherData.temperature - 273.15) * 9) / 5 + 32;
    const fahrenheitMinTemperature =
      ((weatherData.minTemperature - 273.15) * 9) / 5 + 32;
    const fahrenheitMaxTemperature =
      ((weatherData.maxTemperature - 273.15) * 9) / 5 + 32;
    setFahrenheit({
      ...fahrenheit,
      temperature: fahrenheitTemperature,
      minTemperature: fahrenheitMinTemperature,
      maxTemperature: fahrenheitMaxTemperature,
    });
  };

  const convertFahrenheitToCelsius = (
    temperature: number,
    minTemperature: number,
    maxTemperature: number
  ) => {
    const celsiusTemperature = ((temperature - 32) * 5) / 9;
    const celsiusMinTemperature = ((minTemperature - 32) * 5) / 9;
    const celsiusMaxTemperature = ((maxTemperature - 32) * 5) / 9;
    setCelsius({
      ...celsius,
      temperature: celsiusTemperature,
      minTemperature: celsiusMinTemperature,
      maxTemperature: celsiusMaxTemperature,
    });
  };

  useEffect(() => {
    if (weatherData) {
      convertKelvinToFahrenheit();
    }
  }, [weatherData]);

  return (
    <WeatherCardComponent
      weatherData={weatherData}
      showFahrenheit={showFahrenheit}
      setShowFahrenheit={setShowFahrenheit}
      celsius={celsius}
      fahrenheit={fahrenheit}
      convertFahrenheitToCelsius={convertFahrenheitToCelsius}
      showWeatherCard={showWeatherCard}
      setShowWeatherCard={setShowWeatherCard}
      isLoading={isLoading}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default WeatherCard;
